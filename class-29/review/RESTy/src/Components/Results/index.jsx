import React from 'react';
import JsonView from 'react18-json-view';
import 'react18-json-view/src/style.css';
import './Results.scss';

function Results(props) {
  console.log(props);

  return (
    <section>
      {props.data ? (
        <textarea className="json-textarea" value={JSON.stringify(props.data, null, 2)}>
          <JsonView src={props.data} stringify={true} />
        </textarea>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default Results;
