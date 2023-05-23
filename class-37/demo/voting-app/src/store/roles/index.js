const initialState = [
  {name: "instructor", hasVoted: false},
  {name: 'ta', hasVoted: false}
];

function roleReducer(state = initialState, action) {

  switch(action.type) {
    case "INCREMENT_VOTE":
      // determine which role was voted on, and set has voted to true
      return state.map(role => {
        if (role.name === action.payload.role) {
          role.hasVoted = true
        }
        return role;
      });
    case "DECREMENT_VOTE":
      // determine which role was un-voted for, and set hasVoted to false
      return state.map(role => {
        if (role.name === action.payload.role) {
          role.hasVoted = false;
        }
        return role;
      });
    default:
      return state;
  }
}

export default roleReducer;
