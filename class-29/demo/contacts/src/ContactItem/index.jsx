function ContactItem({ contact, handleRemoveContact }) {

  return (
    <div id="contact-item">
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
      <button onClick={() => handleRemoveContact(contact)}>Remove Contact</button>
    </div>
  )

}

export default ContactItem;
