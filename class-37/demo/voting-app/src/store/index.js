import { createStore, combineReducers } from 'redux';
// import voteReducer from './votes';
import candidateReducer from './candidates';
import roleReducer from './roles';
import voteReducer from './totalVotes';

const rootReducer = combineReducers({
  roles: roleReducer,
  candidates: candidateReducer,
  totalVotes: voteReducer,
});


function store() {
  return createStore(rootReducer);
}

export default store;
