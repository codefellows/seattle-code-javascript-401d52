import React from 'react';

export const ThemeContext = React.createContext();

function ThemeProvider(props) {

  const [mode, setMode] = React.useState('dark');

  const toggleMode = () => {
    switch (mode) {
      case 'light':
        setMode('dark');
        break;
      case 'dark':
      default:
        setMode('light');
    }
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export default ThemeProvider;
