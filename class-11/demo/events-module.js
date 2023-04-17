'use strict';

const Events = require('events');

const eventEmitter = new Events();

function test(payload) {
  console.log('I have been triggered!', payload);
}

// 'test' is just a string.
eventEmitter.on('banana', test);

// active the "test" event, 2nd arguments is the payload
eventEmitter.emit('banana', {name: 'Jacob'});
