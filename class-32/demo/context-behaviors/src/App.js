import './App.css';
import SettingsProvider from './context/settings';
import Header from './Header';

function App() {
  return (
    <SettingsProvider>
      <div className="App">
        <Header />
      </div>
    </SettingsProvider>
  );
}

export default App;
