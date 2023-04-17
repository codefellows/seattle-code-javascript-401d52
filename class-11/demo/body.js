'use strict';

const { emitter, eventPool } = require('./eventPool');

const state = {
  temperature: 98,
  eyesite: 20,
  mobility: "full",
  intelligence: 98,
  hunger: 70
}

let temperatureEvent = eventPool[0];
let hungerEvent = eventPool[1];
let intelligenceEvent = eventPool[2];

// emitter.on(temperatureEvent, function(payload) {
//   console.log('Temperature Payload emitted', payload);
//   // state.temperature = payload.temperature;
//   // console.log('UPDATED STATE', state);
// });

// this waiting on the brain
emitter.on('UPDATE_STATE', (payload) => {
  let property = Object.keys(payload)[0];
  state[property] = payload[property];
  console.log(state);
})

require('./brain'); // this code creates the mega listener
require('./circulation'); // execute the code in circulation, this code emits the event
require('./stomach');
