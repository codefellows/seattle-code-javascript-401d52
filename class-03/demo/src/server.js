'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');

app.use(cors());
app.use(express.json()); // allows us to attach JSON to the request object

// app.use('/person', function (request, response, next) {
//   console.log('Hit the person resource');
//   response.send('Working on the router');
// });
app.use('/person', router);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is listening on port', port);
    })
  }
}
