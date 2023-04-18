'use strict';

const handlePickup = require('./handlers');
const eventEmitter = require('../eventPool');

jest.mock('../eventPool', () => ({
  on: jest.fn(),
  emit: jest.fn()
}));

describe('Testing the driver functionality', () => {
  test('Should console log the payload, and call event emitter with proper event names', () => {
    console.log = jest.fn();

    handlePickup({orderId: 'test'});
    expect(console.log).toHaveBeenCalledTimes(2);
    expect(eventEmitter.emit).toHaveBeenCalledTimes(2);
  });
});
