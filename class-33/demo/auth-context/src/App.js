import './App.css';
import AuthProvider from './Context/auth';
import Login from './Context/auth/Login';
import List from './Components/List';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Login />
        <List />
      </div>
    </AuthProvider>
  );
}

export default App;
