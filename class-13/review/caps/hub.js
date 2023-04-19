'use strict';

const { eventPool } = require('./eventPool');
const { emitter } = require('./eventPool');

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;

const io = new Server(PORT);

let capsServer = io.of('/caps');


  capsServer.on('connection', (socket)=>{
    console.log('CLIENT HAS CONNECTED TO CAPS', socket.id);

    socket.on('join-group', (payload)=>{
      // console.log('room joined!', payload);
      socket.join(payload['store'])
    });

    socket.on(eventPool[0], (payload) =>{
      // capsServer.to(payload.store).emit(eventPool[0], payload);

      socket.broadcast.emit(eventPool[0], payload);
      console.log(
      `Event: ${eventPool[0]},
      time: ${new Date(Date.now()).toDateString()},
      payload:{
        store: ${payload['store']},
        orderId: ${payload['orderId']},
        customer: ${payload['customer']},
        address: ${payload['address']},
      } `)
    });

    socket.on(eventPool[1], (payload) =>{
      socket.to(payload.store).emit(eventPool[1],payload);
      console.log(
        `Event: ${eventPool[1]},
        time: ${new Date(Date.now()).toDateString()},
        payload:{
          store: ${payload['store']},
          orderId: ${payload['orderId']},
          customer: ${payload['customer']},
          address: ${payload['address']},
        } `
      )
    });

    socket.on(eventPool[2], (payload) =>{
      socket.to(payload.store).emit(eventPool[2],payload);
      console.log(
        `Event: ${eventPool[2]},
        time: ${new Date(Date.now()).toDateString()},
        payload:{
          store: ${payload['store']},
          orderId: ${payload['orderId']},
          customer: ${payload['customer']},
          address: ${payload['address']},
        } `
      )
    });
  })

