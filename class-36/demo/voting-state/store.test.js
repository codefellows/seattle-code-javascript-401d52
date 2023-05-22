// import { initialState, voteReducer } from "./votes";
// import {createStore} from 'redux';
const { initialState, voteReducer} = require('./votes.js');
const {createStore} = require('redux');

describe('Testing our redux store', () => {
  test('Can create initial State object', () => {

    const store = createStore(voteReducer);
    console.log(store);
    expect(store).toBeTruthy();

    let currentState = store.getState();
    // console.log('CURRENT STATE', currentState);
    expect(currentState.totalVotes).toEqual(0);
    expect(currentState.hasVoted).toEqual(false);
    expect(currentState.candidates.length).toEqual(3);
  });

  test('Should increment votes for a given candidate', () => {
    const store = createStore(voteReducer);

    store.dispatch({
      type: 'INCREMENT_VOTE',
      payload: 'Jacob'
    });


    let currentState = store.getState();
    // console.log(currentState);
    expect(currentState.totalVotes).toEqual(1);
    expect(currentState.hasVoted).toEqual(true);
    expect(currentState.candidates[0].votes).toEqual(1);
  });

  test('Should decrement votes for a given candidate', () => {
    const store = createStore(voteReducer);

    store.dispatch({
      type: 'INCREMENT_VOTE',
      payload: 'Jacob'
    });
    store.dispatch({
      type: 'DECREMENT_VOTE',
      payload: 'Jacob'
    });

    let currentState = store.getState();
    console.log(currentState);
    expect(currentState.totalVotes).toEqual(0);
    expect(currentState.hasVoted).toEqual(false);
    expect(currentState.candidates[0].votes).toEqual(0);
  });
});
