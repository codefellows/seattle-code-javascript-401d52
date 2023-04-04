'use strict';

require('dotenv').config();
const server = require('./src/server');
const PORT = process.env.PORT;

server.start(PORT);
// app.listen(PORT, () => {})
