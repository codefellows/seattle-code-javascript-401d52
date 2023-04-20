'use strict';

const util = require('util');

const { Server } = require('socket.io');
const MessageQueue = require('./lib/MessageQueue');
const PORT = process.env.PORT || 3001;

const io = new Server(PORT);

const capsServer = io.of('/caps');
const pickupQueue = new MessageQueue();
const deliveredQueue = new MessageQueue();

capsServer.on('connection', (socket) => {

  socket.on('join-room', (payload) => {
    socket.join(payload.store);
    capsServer.to(payload.store).emit('join-room', 'client joined room! ' + socket.id);
  })

  socket.on('pickup', (payload) => {

    let storeQueue = pickupQueue.read(payload.store);
    if (storeQueue) {
      storeQueue.store(payload.orderId, payload);
    } else{
      let newStoreQueue = new MessageQueue();
      newStoreQueue.store(payload.orderId, payload);
      pickupQueue.store(payload.store, newStoreQueue);
    }
    console.log(util.inspect(pickupQueue, false, null));
    socket.broadcast.emit('pickup', payload);
  });

  socket.on('in-transit', (payload) => {
    capsServer.to(payload.store).emit('in-transit', payload);
  });

  socket.on('delivered', (payload) => {
    console.log('Pickup Queue BEFORE REMOVE', util.inspect(pickupQueue, false, null));
    console.log('Delivered Queue BEFORE REMOVE', util.inspect(deliveredQueue, false, null));
    let storeQueue = pickupQueue.read(payload.store);
    let order = storeQueue.remove(payload.orderId);
    let storeDelivered = deliveredQueue.read(payload.store);
    if (storeDelivered) {
      storeDelivered.store(order.orderId, order);
    } else {
      let newStoreDelivered = new MessageQueue();
      newStoreDelivered.store(order.orderId, order)
      deliveredQueue.store(order.store, newStoreDelivered);
    }

    console.log('Pickup Queue AFTER REMOVE', util.inspect(pickupQueue, false, null));
    console.log('Delivered Queue AFTER REMOVE', util.inspect(deliveredQueue, false, null));
    capsServer.to(payload.store).emit('delivered', payload);
  });

  // the driver is checking for any pickups that they missed
  socket.on('catchup-pickup', (payload) => {
    // store dependant
    let storePickups = pickupQueue.read(payload.store);
    Object.values(storePickups.data).forEach(order => {
      socket.emit('pickup', order);
    });
  });

  socket.on('received', () => { })

});

