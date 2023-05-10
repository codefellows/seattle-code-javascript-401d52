import {useEffect} from 'react';

function ContactsList ({ contacts }) {

  // this should run after component is unmounted.
  useEffect(() => {
    return () => {
      console.log('this should only run when Contacts List component is unmounted');
    }
  }, []);

  return (
    <div id="contacts-list">
      {contacts.map(contact => <p>{contact.name}</p>)}
    </div>
  )
}

export default ContactsList;
