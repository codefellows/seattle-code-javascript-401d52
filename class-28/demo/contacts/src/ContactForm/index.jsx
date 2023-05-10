import { useEffect } from 'react';

// do you need to watch functions as depedency?
function ContactForm({ addContact }) {

  const [name, setName] = useState(null);

  useEffect(() => {
    console.log('Contact Form has mounted');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact()
  }

  return (
    <form id="contact-form" onSubmit={}>

    </form>
  );

}

export default ContactForm;
