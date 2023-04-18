'use strict';

const { io } = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';

let generalSocket = io(SERVER_URL);
let stomachSocket = io(SERVER_URL + '/hunger');

generalSocket.on('sunlight', (payload) => {
  console.log('payload from server', payload);
});

generalSocket.emit('sunlight', { brightness: 90 });

stomachSocket.on('food', (payload) => {
  console.log('Current hunger level', payload);
});

