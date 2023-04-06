'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const catRoute = require('./routes/cat');
const boatRoute = require('./routes/boat');

// applying middleware to the entire server, before anything else
app.use(express.json());
app.use(cors());

app.use('/cat', catRoute);
app.use('/boat', boatRoute);

module.exports = {
  app,
  start: (port) => app.listen(port, () => {
    console.log('Server is listening on', port);
  }),
}
