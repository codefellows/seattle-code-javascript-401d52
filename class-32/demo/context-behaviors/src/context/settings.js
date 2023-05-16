import React from 'react';

export const SettingsContext = React.createContext();

const initialState = {
  title: 'My Awesome Website',
  handle: 'noHat',
  url: `noHat@npm.com`,
}


function settingsReducer(state, action) {
  switch(action.type) {
    case 'UPDATE_TITLE':
      if (typeof(action.payload) !== 'string') {
        console.error('Invalid title');
        return state;
      } else {
        let newState = { ...state, title: action.payload }
        localStorage.setItem('userSettings', JSON.stringify(newState));
        return newState;
      }
    case 'UPDATE_HANDLE':
      return {
        ...state,
        handle: action.payload,
        url: `${action.payload}@npm.com`
      }
    default:
      return state;
  }
}

function SettingsProvider({ children }) {

  const [settings, dispatch] = React.useReducer(settingsReducer, initialState);

  // define our actions
  const updateTitle = (title) => {
    dispatch({
      type:'UPDATE_TITLE',
      payload: title
    });
  }

  const updateHandle = (handle) => {
    dispatch({
      type: 'UPDATE_HANDLE',
      payload: handle
    });
  }

  const fetchSettings =() => {
    let settingsObject = JSON.parse(localStorage.getItem('userSettings'));
    return settingsObject;
  }

  return (
    <SettingsContext.Provider value={{ settings, updateTitle, updateHandle, fetchSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;

