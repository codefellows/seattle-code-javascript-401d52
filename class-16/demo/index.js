'use strict';

require('dotenv').config();
const { start } = require('./app');
const PORT = process.env.PORT || 3001;

start(PORT);
