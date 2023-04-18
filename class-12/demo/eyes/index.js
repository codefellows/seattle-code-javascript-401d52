'use strict';

const { io } = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';

let socket = io(SERVER_URL);

socket.on('sunlight', (payload) => {
  console.log('IT is ' + payload.brightness + ' bright outside');
});
