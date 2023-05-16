import React from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {

  const [itemsToDisplay, setItemsToDisplay] = React.useState(2);
  const [hideCompleted, setHideCompleted] = React.useState(true);
  const [sort, setSort ] = React.useState('difficulty');

  return (
    <SettingsContext.Provider value={{ itemsToDisplay, hideCompleted, sort }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
