import React, { useState } from 'react';
import './Form.scss';


function Form({ handleApiCall }) {
  const [url, setUrl] = useState(null);
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };

    if (method !== 'GET') {
       formData.body = body;
    }

    console.log('Should return the API', formData);
    handleApiCall(formData);
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.id.toUpperCase());
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' value={url} onChange={(e) => setUrl(e.target.value)} />
          <button type='submit'>GO!</button>
        </label>
        <label className='methods'>
          <button id='get' className={ method === 'GET' ? 'active' : ''}>GET</button>
          <button id='post' className ={ method === 'POST' ? 'active' : ''} onClick={handleMethodChange}>POST</button>
          <button id='put' className={ method === 'PUT' ? 'active' : ''} onClick={handleMethodChange}>PUT</button>
          <button id='delete' className={ method === 'DELETE' ? 'active' : ''} onClick={handleMethodChange}>DELETE</button>
        </label>
        {(method === 'POST' || method === 'PUT')  &&
        <label>
          <span> Body: </span>
          <textarea name='body' value={body} onChange={ (e) => setBody(e.target.value)}></textarea>
        </label>}
      </form>
    </>
  );
}

export default Form;
