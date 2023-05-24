import './App.css';
import Todos from './components/Todos';
import {Provider} from 'react-redux';
import createStore from './store';

function App() {
  return (
    <Provider store={createStore()}>
      <div className="App">
        <header className="App-header">
          <Todos />
        </header>
      </div>
    </Provider>
  );
}

export default App;
