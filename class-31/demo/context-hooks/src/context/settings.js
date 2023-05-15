import React from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {

  const [url, setUrl] = React.useState('http://MyAwesomeSite.com');

  return (
    <SettingsContext.Provider value={{ url }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
