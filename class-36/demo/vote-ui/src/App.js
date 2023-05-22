import './App.css';
import { Provider } from 'react-redux'; // this is our new Provider from the library that connects "stores" to react applications.
import createStore from './store';
import DisplayVotes from './Components/DisplayVotes'
import VoteForm from './Components/VoteForm';

function App() {
  return (
    <Provider store={createStore()}>
      <div className="App">
        <header className="App-header">
          <DisplayVotes />
          <VoteForm />
        </header>
      </div>
    </Provider>
  );
}

export default App;
