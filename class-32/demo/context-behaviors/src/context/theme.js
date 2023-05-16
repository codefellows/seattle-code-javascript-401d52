import React from 'react';

export const ThemeContext = React.createContext();

function ThemeProvider({ children }) {

  const [mode, setMode] = React.useState('dark');

  // context behavior for setting mode
  const toggleMode = () => {
    switch(mode) {
      case 'dark':
        setMode('light');
        break;
      case 'light':
      default:
        setMode('dark');
    }
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
