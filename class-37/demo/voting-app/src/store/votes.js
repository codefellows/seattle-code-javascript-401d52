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
          const objCopy = {...candidate};
          if (objCopy.name === action.payload) {
            objCopy.votes += 1;
          }
          return objCopy;
        }),
        totalVotes: state.totalVotes + 1,
        hasVoted: true,
      }
    case "DECREMENT_VOTE":
      return {
        candidates: state.candidates.map(candidate => {
          const objCopy = { ...candidate };
          if (objCopy.name === action.payload) {
            objCopy.votes = objCopy.votes - 1;
          }
          return objCopy;
        }),
        totalVotes: state.totalVotes - 1,
        hasVoted: false,
      }
    default:
      return state;
  }
}

// module.exports = {
//   initialState,
//   voteReducer,
// }
export default voteReducer;
