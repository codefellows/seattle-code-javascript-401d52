'use strict';

require('dotenv').config();
const io = require('socket.io-client');
const SOCKET_URL = process.env.SOCKET_URL || 'http://localhost:3001';

const socket = io.connect(SOCKET_URL);

socket.on('test', (payload) => {
  console.log(payload);
});
socket.emit('test', { message: 'test' });
