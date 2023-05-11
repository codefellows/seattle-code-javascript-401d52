import {useReducer, useEffect} from 'react';

function Sum() {

  let initialState = {
    list: [1,2],
    sum: 3,
    product: 2
  };

  // let action = {type, payload} a thing that changes our state

  let reducer = (state, action) => {

    switch(action.type) {
      case "ADD_NUMBER":
        return { // think of this like setState
          list: [...state.list, action.payload],
          sum: action.payload + state.list.reduce((acc, val) => acc + val, 0),
          product: state.product,
        }
      case "REMOVE_NUMBER":
      default:
        return state;
    }
  }

  let [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   dispatch({type:"ADD_NUMBER", payload: 3});
  // }, []);

  function handleClick() {
    dispatch({
      type: "ADD_NUMBER",
      payload: state.list.length + 1
    });
  }

  return (
    <div>
      <p>{JSON.stringify(state)}</p>
      <button onClick={handleClick}>Add to list</button>
    </div>
  )

}

export default Sum;
