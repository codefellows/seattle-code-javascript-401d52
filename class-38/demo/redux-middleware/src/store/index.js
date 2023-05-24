import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from './middlewares/logger';
// import thunk from 'redux-thunk';
import thunk from './middlewares/thunk';
import todoReducer from './todos';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default function store() {
  return createStore(rootReducer, applyMiddleware(logger, thunk));
}
