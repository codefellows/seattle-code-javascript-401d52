import candidateSlice from './candidateSlice';
import candidateReducer, {incrementVote, decrementVote} from './candidateReducer';
import roleReducer from './roleReducer';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

describe('testing our toolkit store', () => {
  test('Should have initial State using slice', () => {
    let rootReducer = combineReducers({
      candidates: candidateSlice.reducer
    });
    let store = configureStore({ reducer: rootReducer });

    let state = store.getState();
    expect(state.candidates.length).toEqual(3);
    expect(state.candidates[0].votes).toEqual(0);
  });

  test('Should be able to increment votes using slice', () => {
    let rootReducer = combineReducers({
      candidates: candidateSlice.reducer
    });
    let store = configureStore({ reducer: rootReducer });

    let { incrementVote } = candidateSlice.actions;

    // store.dispatch({
    //   type: 'INCREMENT_VOTE'
    //   payload: 'Jacob'
    // })
    store.dispatch(incrementVote('Jacob'));
    let state = store.getState();
    expect(state.candidates[0].votes).toEqual(1);
  });

  test('Should be able to decrement votes using slice', () => {
    let rootReducer = combineReducers({
      candidates: candidateSlice.reducer
    });
    let store = configureStore({ reducer: rootReducer });

    let { decrementVote } = candidateSlice.actions;

    store.dispatch(decrementVote('Jacob'));

    let state = store.getState();
    expect(state.candidates[0].votes).toEqual(-1);
  });

  test('Should have initial state using the reducer', () => {
    let rootReducer = combineReducers({
      candidates: candidateReducer,
      roles: roleReducer,
    });

    const store = configureStore({ reducer: rootReducer });

    let state = store.getState();
    expect(state.candidates.length).toEqual(5);
    expect(state.roles.length).toEqual(2);
  });

  test('Should increment votes using the created action', () => {
    let rootReducer = combineReducers({
      candidates: candidateReducer,
      roles: roleReducer
    });

    const store = configureStore({ reducer: rootReducer });

    store.dispatch(incrementVote({name:'JB', role: 'instructor'}));
    let state = store.getState();

    expect(state.candidates[1].votes).toEqual(1);
    expect(state.roles[0].totalVotes).toEqual(1);
  });
  test('Should decrement votes using the created action', () => {
    let rootReducer = combineReducers({
      candidates: candidateReducer,
      roles: roleReducer
    });

    const store = configureStore({ reducer: rootReducer });

    store.dispatch(decrementVote({name: 'JB', role: 'instructor'}));
    let state = store.getState();

    expect(state.candidates[1].votes).toEqual(-1);
    expect(state.roles[0].totalVotes).toEqual(-1);
  });
})
