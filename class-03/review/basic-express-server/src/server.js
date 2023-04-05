'use strict'

const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const handle404 = require('./error-handlers/404');
const handle500 = require('./error-handlers/500');

app.use(cors());

const data = {name: ""};

// app level function that runs no matter what route is being used in the request
app.use(logger);

app.get('/person', validator, (request, response, next) => {
  // data.name = { name: request.query.data.name }
  data.name = request.query.name;
  response.status(200).json(data);
});

// the order here does matter
app.use('*', handle404);
app.use(handle500);

module.exports = {
  app,
  start: (PORT) => app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  })
};
