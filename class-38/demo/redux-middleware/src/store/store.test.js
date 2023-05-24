import createStore from './index';
import { addTodo } from './todos';

describe('Testing the store', () => {
  test('Add a single todo', () => {
    let store = createStore();

    let state = store.getState();

    expect(state.todos.count).toEqual(0);

    store.dispatch(addTodo('Test'));

    state = store.getState();
    expect(state.todos.count).toEqual(1);
  });
});
