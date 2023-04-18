'use strict';

const Chance = require('chance');
const chance = new Chance();

function generatePayload() {
  return {
    "store": chance.company(),
    "orderId": chance.guid(),
    "customer": chance.name(),
    "address": chance.address()
  }
}

function handleDelivered(payload) {
  console.log(`Thank you, ${payload.customer}`);
}

module.exports = {
  generatePayload,
  handleDelivered,
}
