'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

app.get('/status', (request, response, next) => {
  response.status(200).send('OKAY');
});

io.on('connection', (socket) => {
  console.log('A Socket has connected!', socket.id);
  socket.on('test', (payload) => {
    socket.emit('test', payload);
  });
});

module.exports = {
  app,
  start: (PORT) => {
    httpServer.listen(PORT, () => {
      console.log('App is running!');
    });
  }
}

