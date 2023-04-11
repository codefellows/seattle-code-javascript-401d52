'use strict';

function basic(request, response, next) {
  console.log(request.headers);
  if (request.headers.authorization) {
    // request.headers.authorization.split(' ').pop().split(':'); // ["Basic", "ahsdbf6723747632"]

    // check the username
    // check the password

    next();

  } else {
    // next();
    response.status(403).send('Invalid login');
  }
}

module.exports = basic;
