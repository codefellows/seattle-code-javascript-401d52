'use strict';

const Chance = require('chance');
const chance = new Chance();

const { subscribe, trigger } = require('./client');

let payload = {
  store: 'ACME Widgets',
  customer: chance.name(),
  orderId: chance.guid(),
  address: chance.address(),
}

subscribe('join-room', console.log);
subscribe('in-transit', (payload) => {
  console.log('Your order is on the way ' + payload.customer + '.');
});

subscribe('delivered', console.log);
trigger('join-room', payload);

trigger('pickup', payload);
