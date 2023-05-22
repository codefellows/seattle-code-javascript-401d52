'use strict';

let initialState = {
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
          let obj = {...candidate}
          if (obj.name === action.payload) {
            obj.votes = obj.votes + 1;
          }
          return obj;
        }),
        totalVotes: state.totalVotes + 1,
        hasVoted: true,
      }
    case "DECREMENT_VOTE":
      return {
        candidates: state.candidates.map(candidate => {
          let obj = {...candidate}
          if (obj.name === action.payload) {
            obj.votes = obj.votes - 1;
          }
          return obj;
        }),
        totalVotes: state.totalVotes - 1,
        hasVoted: false,
      }
    default:
      return state;
  }
}

module.exports = {
  voteReducer,
}
