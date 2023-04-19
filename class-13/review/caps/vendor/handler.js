'use strict';

// const { io } = require('socket.io-client');
// const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';

// const {emitter, eventPool} = require('./../eventPool');

//vendor handler

// const payload = {
//   store: '1-206-flowers',
//   orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//   customer: 'Jamal Braun',
//   address: 'Schmittfort, LA',
// }

// let capsSocket = io(SERVER_URL + '/caps');

// capsSocket.emit('join-group', payload);
// capsSocket.emit(eventPool[0], payload);

// console.log(eventPool);
// capsSocket.on(eventPool[2], (payload) =>{
  // emitter.emit('join-group', payload);
  // console.log('Thank you for your order, ', payload['customer'])
// });

module.exports = {
  sendPickup: function (socket, payload) {
    socket.emit('pickup', payload);
  },
  generatePayload: function () {
    return {
      store: '1-206-flowers',
      orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA',
    }
  },
  handleDelivered: function (payload) {
    console.log('Thank you for your order, ', payload['customer'])
    process.exit();
  },
}
