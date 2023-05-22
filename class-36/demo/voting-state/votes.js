'use strict';

const initialState = {
  candidates: [{name: 'Jacob', votes: 0}, {name: 'JB', votes:0}, {name: 'Sheyna', votes: 0}],
  totalVotes: 0,
  hasVoted: false,
}

// who changes state?
function voteReducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT_VOTE":
      return {
        candidates: state.candidates.map(candidate => {
          if (candidate.name === action.payload) {
            candidate.votes += 1;
          }
          return candidate;
        }),
        totalVotes: state.totalVotes + 1,
        hasVoted: true,
      }
    case "DECREMENT_VOTE":
      return {
        candidates: state.candidates.map(candidate => {
          if (candidate.name === action.payload) {
            console.log('CANDIDATE FOUND ', candidate);
            candidate.votes = candidate.votes - 1;
          }
          console.log(candidate);
          return candidate;
        }),
        totalVotes: state.totalVotes - 1,
        hasVoted: false,
      }
    default:
      return state;
  }
}

module.exports = {
  initialState,
  voteReducer,
}
