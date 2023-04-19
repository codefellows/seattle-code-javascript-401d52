'use strict';

require('./handler');
const { emitter } = require('./../eventPool');

const { handledPickup } = require('./handler');

describe('Testing driver handler to listen for and emitting events', ()=>{

  test('When the an pick-up event occurs, emit event', ()=>{


    // handledPickup(socket)(payload);

    let payload=
    { store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jamal Braun',
      address: 'Schmittfort, LA' };
    console.log = jest.fn();
    emitter.emit('pickup', payload);
    expect(console.log).toHaveBeenCalledTimes(1);
  })


});
