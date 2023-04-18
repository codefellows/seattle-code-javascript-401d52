'use strict';

const eventEmitter = require('../eventPool');
const handlePickup = require('./handlers');

eventEmitter.on('pickup', handlePickup);
