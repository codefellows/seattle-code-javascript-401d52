import './App.css';
import ThemeProvider from './context/theme';
import SettingsProvider from './context/settings';
import { MantineProvider } from '@mantine/core';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
      <ThemeProvider>
        <SettingsProvider>
          <div className="App">
            <Header />
            <Footer />
          </div>
        </SettingsProvider>
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App;
