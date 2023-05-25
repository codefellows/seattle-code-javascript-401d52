import { createAction, createReducer } from '@reduxjs/toolkit';

export const incrementVote = createAction('INCREMENT_VOTE');
export const decrementVote = createAction('DECREMENT_VOTE');

// takes an initialState object
const candidateReducer = createReducer([
  { name: 'Jacob', votes: 0 , role: 'instructor'},
  { name: 'JB', votes: 0, role: 'instructor' },
  { name: 'Sheyna', votes: 0, role: 'instructor' },
  { name: 'Michael', votes: 0, role: 'ta' },
  { name: 'Mark', votes: 0, role: 'ta'},
], (builder) => {
  builder
    .addCase(incrementVote, (state, action) => {
      console.log(action);
      state.forEach(candidate => {
        if (candidate.name === action.payload.name) {
          candidate.votes = candidate.votes + 1;
        }
      });
    })
    .addCase(decrementVote, (state, action) => {
      state.forEach(candidate => {
        if (candidate.name === action.payload.name) {
          candidate.votes = candidate.votes - 1;
        }
      });
    });
});

export default candidateReducer;
