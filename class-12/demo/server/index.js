'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3001;

const io = new Server(PORT);

io.on('connection', (socket) => {
  console.log('CLIENT HAS CONNECTED', socket.id);

  socket.on('sunlight', (payload) => {
    // emits back to the same client that emitted the event
    // socket.emit('sunlight', payload);

    // notify the entire server
    // io.emit('sunlight', payload);

    // emits to all clients that are not the original message emitter.
    socket.broadcast.emit('sunlight', payload);
  });
});

// namespace
let stomachServer = io.of('/hunger');

stomachServer.on('connection', (socket) => {
  console.log('CLIENT CONNECTED TO STOMACH', socket.id);

  socket.on('join-room', (payload) => {
    socket.join(payload.roomId);
  });

  socket.on('food', (payload) => {
    stomachServer.emit('food', payload);


    // use your vendor "id" string
    // stomachServer.to('room-id').emit('food', payload);
  });
})
