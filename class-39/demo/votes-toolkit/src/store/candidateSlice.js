// const initialState = {}
// function candidatesReducer() {}
// old way

import { createSlice } from '@reduxjs/toolkit';

const candidatesSlice = createSlice({
  name: 'candidates',
  initialState: [
    {name: 'Jacob', votes: 0},
    {name: 'JB', votes: 0},
    {name: 'Sheyna', votes: 0}
  ],
  reducers: { // think of this as the "small" function that responds to a given action
    incrementVote(state, action) {
      console.log(action);
      state.forEach(candidate => {
        if (candidate.name === action.payload) {
          candidate.votes = candidate.votes + 1;
        }
      })
    },
    decrementVote(state, action) {
      state.forEach(candidate => {
        if (candidate.name === action.payload) {
          candidate.votes = candidate.votes - 1;
        }
      });
    }
  }
})

export default candidatesSlice;
