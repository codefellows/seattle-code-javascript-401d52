'use strict';

const { emitter } = require('../eventPool');

const { sendPickup, generatePayload, handleDelivered } = require('./handler');
// const { emitter } = require('./../eventPool');



describe('Testing driver handler to listen for and emitting events', ()=>{

  test('Can the vendor send a pickup to the server', () =>{
    let payload=
    { store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA' };

    let socket = {
      emit: jest.fn(),
    }
    sendPickup(socket, payload);
    expect(socket.emit).toHaveBeenCalledWith('pickup', payload);
  });

  test('Can the vendor generate a payload object', () => {
    let payload = generatePayload();

    expect(payload.store).toBeTruthy();
    expect(payload.customer).toBeTruthy();
    expect(payload.address).toBeTruthy();
    expect(payload.orderId).toBeTruthy();
  });

  test('Can the vendor handle a delivered event', () => {
    let payload = {
      customer: 'test',
    }
    console.log = jest.fn();
    process.exit = jest.fn();

    handleDelivered(payload);
    expect(console.log).toHaveBeenCalledWith('Thank you for your order, ', payload.customer);
    expect(process.exit).toHaveBeenCalled();
  });
});
