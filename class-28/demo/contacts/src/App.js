import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import ContactsList from './ContactsList';
import JsonDisplay from './JsonDisplay';

function App() {

  const [user, setUser] = useState({
    name: 'Jacob',
    phone: '206-111-2222',
  });
  const login = (username, phone) => {
    setUser({ name: username, phone: phone});
  }

  const [contacts, setContacts] = useState([]);
  const addContact = (name, phone) => {
    if (!name || !phone) {
      console.error('Invalid contact');
    } else {
      setContacts(previousContacts => [...previousContacts, {name, phone}]);
    }
  }

  // greedy running of useEffect
  // useEffect(() => {
  //   console.log('Everything is changing!!!', user);
  // });

  // analagous to component mounting
  useEffect(() => {
    console.log('App is mounted');
  }, []); // this is empty

  useEffect(() => {
    console.log('App updated user');
  }, [user]);

  // componentDidUnmount()
  // useEffect(() => {
  //   return () => {
  //     console.log('this should only run when a component is unmounted');
  //   }
  // });

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setUser({ name: 'new user', phone:'1800-flowers'})}>
          Update User
        </button>
        <button onClick={() => setContacts([...contacts, {name: 'Jacob'}])}>
          Add Contact
        </button>
        <button onClick={() => setContacts([])}>
          Remove Contacts
        </button>
      </header> */}
      <Header name={user.name} phone={user.phone}/>
      <Form formName="login" callback={login} user={user}/>
      <Form formName="contact" callback={addContact} user={user}/>
      {contacts.length > 0
        ? <ContactsList contacts={contacts} />
        : null
      }
      <JsonDisplay />
    </div>
  );
}

export default App;
