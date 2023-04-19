'use strict';

const io = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';

const socket = io(SERVER_URL + '/messages');

socket.emit('getMessages', { recipientId: 'Jacob' });

socket.on('getMessages', (payload) => {
  console.log(payload);

  Object.values(payload.data).forEach(message => {
    console.log(message);
    socket.emit('received', message);
  });
});

socket.on('confirm-received', (payload) => {
  console.log('Message Removed!!', payload.messageId);
});
socket.on('received-error', (payload) => {
  console.error(payload);
});
