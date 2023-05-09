import { useState } from 'react';

function NoteForm({ handleSubmit }) {

  const [title, setTitle] = useState(null);
  const [text, setText] = useState(null);

  const handleInput = (event) => {

    let {name, value} =  event.target;

    if (name === 'title') {
      setTitle(value);
    } else {
      setText(value);
    }

  }

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(title, text);
  }

  return (
    <form onSubmit={submitForm}>
      <input data-testid="title-input" name="title" placeholder="title goes here" onChange={handleInput} />
      <input data-testid="text-input" name="text" placeholder="title goes here" onChange={handleInput} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default NoteForm;
