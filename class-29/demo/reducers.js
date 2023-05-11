'use strict';

let initialState = [0,1,2,3,4];

// our transformer function, that must return our new state.
let reducer = (state, currentValue) => {
  // console.log(state, currentValue);
  return state + currentValue;
}

// Array.prototype.reduce
let newState = initialState.reduce(reducer, 0);

console.log(initialState, newState);
