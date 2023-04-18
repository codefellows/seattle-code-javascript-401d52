'use strict';

const eventEmitter = require('./eventPool.js');
// central communication "hub"

const logEvent = (eventName) => (payload) => {
  console.log(`
    EVENT: {
      event: ${eventName},
      time: ${new Date()},
      payload:`,payload
    );
}

// handles request / response
eventEmitter.on('pickup', logEvent('pickup'));
eventEmitter.on('in-transit', logEvent('in-transit'));
eventEmitter.on('delivered', logEvent('delivered'));

require('./driver');
require('./vendor');
