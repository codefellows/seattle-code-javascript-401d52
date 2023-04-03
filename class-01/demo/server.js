'use strict';

const express = require('express');
const capitalize = require('./capitalize/capitilize');
const cors = require('cors');

const app = express(); // singleton

app.use(cors());


// what parameters are defined in express functions ??
app.get('/capitalize-me', function(request, response, next) {
  // I want to send a message as a query parameter??
  if (request.query.message) {
    // I want that message returned in the response as all caps.
    let upperMessage = capitalize(request.query.message);
    response.send(upperMessage);
  } else {
    response.send('Please attach a message');
  }
});

// app.listen(3001, () => {
//   console.log('App is listening!!!!');
// });

// export to the world!
module.exports = app;
