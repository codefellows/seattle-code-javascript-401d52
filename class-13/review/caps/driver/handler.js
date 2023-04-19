'use strict';

const { io } = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';

const { emitter, eventPool } = require('./../eventPool');

let capsSocket = io(SERVER_URL + '/caps');

// capsSocket.emit('join-group', { store: '1-800-flowers' });
// console.log(eventPool);


// function joinGroup(socket) {

// }

// function handlePickup(socket) {
//   return function (payload) {
//     socket.emit('in-transit', payload);
//     socket.emit('delivered', payload);
//   }
// }

// capsSocket.on('pickup', handlePickup(capsSocket));

capsSocket.on(eventPool[0], (payload) =>{

  capsSocket.emit('join-group', payload);
  console.log('caps socket on')

  console.log(`DRIVER: picked up ${payload['orderId']}`)
  capsSocket.emit(eventPool[1], payload);

  console.log(`${payload.orderId} in transit`);
  capsSocket.emit(eventPool[2], payload);

});
