import React, { useState, useContext, createContext } from 'react';

export const SettingsContext = createContext();

export function useSettings() {
  return useContext(SettingsContext);
}

function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    itemsToDisplay: 3,
    hideCompleted: true,
    sort: 'difficulty',
  });

  const updateSettings = (newSettings) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      ...newSettings,
    }));
  };

  const updateItemsToDisplay = () => {}

  const toggleHide = () => {}

  const updateSort = () => {}

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;
