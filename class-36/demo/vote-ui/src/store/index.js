import { createStore } from 'redux';
import voteReducer from './votes';

function store() {
  return createStore(voteReducer);
}

export default store;
