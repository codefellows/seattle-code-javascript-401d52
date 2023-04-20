'use strict';

const { subscribe, trigger } = require('./client');

subscribe('join-room', console.log);
trigger('catchup-pickup', { store: '1-800-flowers'});

subscribe('pickup', (payload) => {
  console.log('Pickup received', payload);

  trigger('join-room', payload);

  setTimeout(() => {
    trigger('in-transit', payload);
  }, 2000);

  setTimeout(() => {
    trigger('delivered', payload);
  }, 10000);
});
