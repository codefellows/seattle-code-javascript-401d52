'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const capitalizeMessage = require('./capitalize/capitalizeMessage');

app.use(cors());

const data = [];

// this becomes middleware when we add these params
function logger(request, response, next) {
  console.log('Express app hit!');
  next();
}

// application level (this runs no matter what route is being used in the request)
app.use(logger);

app.get('/message', (request, response, next) => {
  response.send(data);
});

app.post('/message', capitalizeMessage, (request, response, next) => {
  data.push(request.query.message);
  response.json(data);
});

// error handler -> magic number of parameters!!
app.use(function (err, request, response, next) {
  console.log(err);
  response.status(500).send('Server Error');
});

module.exports = {
  app,
  start:  (port) => app.listen(port, () => {
    console.log('Server is listening');
  }),
};
