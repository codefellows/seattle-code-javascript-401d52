// when our action hits the reducer, redux gives us all three params as a 3 curried functions
const logger = (store) => (next) => (action) => {
  console.log('HERE IS OUR ACTION', action);
  let state = store.getState();

  console.log('HERE IS OUR STATE BEFORE NEW STATE IS MADE', state);

  // we are finished.
  next(action);
}

export default logger;
