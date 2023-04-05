'use strict'

function handle500(err, request, response, next ) {
  console.error("SERVER ERROR:", err);
  response.status(500).send('Server error');
  // next();
}

module.exports = handle500;
