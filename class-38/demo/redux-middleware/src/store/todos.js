const initialState = {
  count: 0,
  results: []
}

function todoReducer(state= initialState, action) {

  switch(action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "ADD_TODO":
      return  {
        count: state.count + 1,
        results: [...state.results, action.payload]
      }
    default:
      return state;
  }
}

export const fetchTodos = () => async (dispatch) => {
  let response = await fetch('https://api-js401.herokuapp.com/api/v1/todo');
  let data = await response.json();

  dispatch({
    type: 'FETCH_TODOS',
    payload: data
  });
}

export const addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  }
}

export default todoReducer;
