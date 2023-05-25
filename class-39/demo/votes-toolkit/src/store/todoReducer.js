import { createAction, createReducer } from "@reduxjs/toolkit";

const loadTodos = createAction('LOAD_TODOS');

const todoReducer = createReducer({
  count: 0,
  results: []
}, (builder) => {
  builder.addCase(loadTodos, (state, action) => {
    return action.payload;
  })
})

export const getTodos = () => async (dispatch) => {
  let response = await fetch('https://api-401js.herokuapp.com/api/v1/todos');
  let data = await response.json();

  dispatch(loadTodos(data));
}

export default todoReducer;
