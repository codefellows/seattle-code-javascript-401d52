'use strict';

const { io } = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3001';
const { sendPickup, generatePayload, handleDelivered } = require('./handler');

let capsSocket = io(SERVER_URL + '/caps');

capsSocket.on('delivered', handleDelivered);

sendPickup(capsSocket, generatePayload());
process.exit();
