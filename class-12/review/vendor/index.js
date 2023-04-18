'use strict';

const eventEmitter = require('../eventPool.js');
const { generatePayload, handleDelivered} = require('./handlers.js');

eventEmitter.on('delivered', handleDelivered);

eventEmitter.emit('pickup', generatePayload());
