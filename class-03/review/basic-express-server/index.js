'use strict'

require('dotenv').config();
const app = require('./src/server.js');
const PORT = process.env.PORT || 3002;

console.log('THIS IS THE APP IMPORT', app);
app.start(PORT);
