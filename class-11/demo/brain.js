'use strict';

const { emitter, eventPool } = require('./eventPool');

// this is just waiting for other body parts to emit events
eventPool.forEach(event => {
  emitter.on(event, (payload) => {
    console.log('BRAIN IS GETTING AN UPDATE', event, payload);

    emitter.emit('UPDATE_STATE', payload);
  });
});
