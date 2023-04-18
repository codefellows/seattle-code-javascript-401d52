const { io } = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';

let stomachSocket = io(SERVER_URL + '/hunger');

// stomachSocket.emit('join-room', order.store);

stomachSocket.emit('food', { hunger: 50 });
