import {useState, useEffect} from 'react';

function Form({ formName, callback, user }) {

  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    console.log(formName + ' has been updated');
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(name, phone);
  }

  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <h2>{formName}</h2>
      <input name="username" onChange={(e) => setName(e.target.value)}/>
      <input name="phone" onChange={(e) => setPhone(e.target.value)}/>
      <button type="submit">Login</button>
    </form>
  )
}

export default Form;
