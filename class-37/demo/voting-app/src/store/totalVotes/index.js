const initialState = 0;

function voteReducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT_VOTE":
      return state + 1;
    case "DECREMENT_VOTE":
      return state - 1;
    default:
      return state;
  }
}

export default voteReducer;
