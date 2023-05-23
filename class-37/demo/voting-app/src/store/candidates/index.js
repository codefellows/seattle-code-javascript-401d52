const initialState = [
  {name: 'Jacob', votes: 0, role: 'instructor'},
  {name: 'JB', votes: 0, role: 'instructor'},
  {name: 'Sheyna', votes: 0, role: 'instructor'},
  {name: 'Michael', votes: 0, role: 'ta'},
  {name: 'Mark', votes: 0, role: 'ta'},
];

function candidateReducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT_VOTE":
      return state.map(candidate => {
        const objCopy = {...candidate};
        if (objCopy.name === action.payload.name) {
          objCopy.votes += 1;
        }
        return objCopy;
      });
    case "DECREMENT_VOTE":
      return state.map(candidate => {
          const objCopy = { ...candidate };
          if (objCopy.name === action.payload.name) {
            objCopy.votes = objCopy.votes - 1;
          }
          return objCopy;
        })
    default:
      return state;
  }
}

export default candidateReducer;
