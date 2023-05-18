'use strict';

const users = require('../models/users-model.js');

module.exports = (req, res, next) => {

  // req.headers.authorization should be : "Bearer slfldsf.alfjdslfjdsflj.sflasdjfdlsj"

  if (!req.headers.authorization) { next('Invalid Login'); return; }

  // Pull out just the encoded part by splitting the header into an array on the space and popping off the 2nd element
  let token = req.headers.authorization.split(' ').pop();

  // Notice that here, we're catching the errors from the user model.
  users.authenticateToken(token)
    .then(validUser => {
      req.user = {
        username: validUser.username,
        fullname: validUser.fullname,
        email: validUser.email,
        acl: validUser.acl
      }; req.token = token;
      next();
    })
    .catch(err => { console.log('ERR', err); next('Invalid Login') });

}
