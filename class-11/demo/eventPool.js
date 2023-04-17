'use strict';

const Events = require('events');
const eventEmitter = new Events();

const eventPool = [
  'temperature',
  'hunger',
  'intelligence',
]

module.exports = {
  eventPool: eventPool,
  emitter: eventEmitter
}
