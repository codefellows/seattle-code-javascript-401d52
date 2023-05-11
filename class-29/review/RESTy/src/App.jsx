import React, { useState, useEffect } from 'react';
import './App.scss';

// Let's talk about using index.js and some other name in the component folder.
// There's pros and cons for each way of doing this...
// OFFICIALLY, we have chosen to use the Airbnb style guide naming convention.
// Why is this source of truth beneficial when spread across a global organization?
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';


function App() {

  const [ request, setRequest ] = useState(null);
  const [ response, setResponse ] = useState(null)
  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  const fetchData = () => {
    setLoading(true);
    fetch('https://swapi.dev/api/people/1/')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [data]); // this runs when data changes

  // useEffect(() => {
  //   fetchData(request);
  // }, [request])


  const handleApiCall = async (formData) => {
    setLoading(true);
    // setRequest(formData);
    console.log('test for formData', formData);
    try {
      const response = await fetch(formData.url, {
        method: formData.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.body),
      });
      console.log('response test', response);
      const data = await response.json();
      console.log(data);
      setData(data);
      // Do something with the response data, such as updating state
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the API call
    }
  };

  console.log(loading);
  return (
    <>
      <Header />
        <Form request={request} setRequest={setRequest} setResponse={setResponse} handleApiCall={handleApiCall}/>
        {/* <Results data={response} /> */}
        <div>{request}</div>
        <div>
          JSON Data: { {loading} ? <Results data={data}/> : <p>Error loading data object</p> }
        </div>
        <Footer />
    </>
  )
}
// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }


export default App;
