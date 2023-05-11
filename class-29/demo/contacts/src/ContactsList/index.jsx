import { useReducer } from 'react';
import ContactItem from '../ContactItem';
import Chance from 'chance';

// import { addContact, removeContact, contactReducer, initialState} from '../reducers/contacts';

const chance = new Chance();

function ContactsList() {

  // const [modalActive, setModal] = useState(false);

  const initialState = {
    count: 0,
    list: [], // {name, phone, id}
    favorites: []
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'ADD_CONTACT':
        return {
          count: state.count + 1,
          list: [...state.list, action.payload],
        }
      case "REMOVE_CONTACT":
        // check the payload, if the object matches remove from the list
        return {
          count: state.count - 1,
          list: state.list.filter(contact => (contact !== action.payload)),
        }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState); // initialState becomes state in our reducer

  // action creator that just returns an action object
  const addContact = (contact) => {
    return {
      type: 'ADD_CONTACT',
      payload: contact
    };
  }

  const removeContact = (contact) => {
    return {
      type: "REMOVE_CONTACT",
      payload: contact
    }
  }

  const createRandomContact = () => {
    dispatch(addContact({
      name: chance.name(),
      phone: chance.phone()
    }));
  }
  const handleRemoveContact = (contact) => {
    dispatch(removeContact(contact));
  }
  console.log(state);
  return (
    <div id="contacts-list">
      <h2>My Contacts</h2>
      <p>Count: {state.count}</p>
      {state.list.map(contact => <ContactItem contact={contact} handleRemoveContact={handleRemoveContact}/>)}
      <button onClick={createRandomContact}>Add Random Contact</button>
    </div>
  )
}

export default ContactsList;
