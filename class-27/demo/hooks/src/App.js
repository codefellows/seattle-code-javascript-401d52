import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CountButton from './CountButton';
import NoteForm from './NoteForm';

function App() {

  // this was how we may be used to state
  // const [state, setState] = useState({ count: 0 });

  const [count, setCount] = useState(0);
  const increment = (value) => {
    setCount(count + value);
  }
  const decrement = (value) => {
    setCount(count - value);
  }

  class Note {
    constructor(title, text) {
      this.title= title;
      this.text = text;
    }
  }

  const [notes, setNotes] = useState([]);
  const createNote = (title, text) => {
    if (!title || !text) {
      console.error('Bad Note');
    } else {
      setNotes([...notes, new Note(title, text)]);
    }
  }

  console.log(notes);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is our count: {count}
        </p>
        {/* <button onClick={() => setCount(count + 1)}>Add</button> */}
        {/* <button onClick={() => setCount(count - 1)}>Subtract</button> */}
        <CountButton
          handleClick={() => increment(2)}
          text="Add 2"
        />
        <CountButton
          handleClick={() => decrement(2)}
          text="Subtract 2"
        />
        <NoteForm handleSubmit={createNote}/>
        {notes.map((note, idx) => {
          return (
            <div key={idx}>
              <p>{note.title}</p>
              <p>{note.text}</p>
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
