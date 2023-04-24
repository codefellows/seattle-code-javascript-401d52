'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/status', (request, response, next) => {
  response.status(200).send('OKAY');
});

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('App is running!');
    });
  }
}

