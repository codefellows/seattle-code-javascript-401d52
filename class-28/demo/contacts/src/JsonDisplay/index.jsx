import JSONPretty from 'react-json-pretty';
import Theme from 'react-json-pretty/dist/monikai';

function JsonDisplay() {

  const json = {
    "headers": {
      "ContentType": "application/json"
    },
    "body": {
      "results": [
        { "name": "Jacob "}
      ]
    }
  }

  return (
    <div id="display">
      <JSONPretty data={json} theme={Theme}/>
    </div>
  )
}

export default JsonDisplay;
