import { createReducer } from '@reduxjs/toolkit';
import { incrementVote, decrementVote } from './candidateReducer';

const roleReducer = createReducer([
  {name: 'instructor', totalVotes: 0, hasVoted: false},
  {name: 'ta', totalVotes: 0, hasVoted: false}
], (builder) => {
  builder
    .addCase(incrementVote, (state, action) => {
      state.forEach(role => {
        if (action.payload.role === role.name) {
          role.totalVotes = role.totalVotes + 1;
          role.hasVoted = true;
        }
      });
    })
    .addCase(decrementVote, (state, action) => {
      state.forEach(role => {
        if (action.payload.role === role.name) {
          role.totalVotes = role.totalVotes - 1;
          role.hasVoted = false;
        }
      });
    })
});

export default roleReducer;
