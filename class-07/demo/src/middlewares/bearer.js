'use strict';

require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const SECRET = process.env.SECRET_STRING;

async function bearer(request, response, next) {

  if(request.headers.authorization) {
    // read the token and validate
    let authString = request.headers.authorization.split(' ')[1]; // Bearer asuhfo7asyfudsgaf
    let payload = jwt.verify(authString, SECRET);
    // if we can verify the token, we can let our request through
    try{
      let userFromDB = await User.findOne({ where: {username: payload.username} });
      console.log(userFromDB);
      if (userFromDB) {
        next();
      } else {
        // if not valid send a un-authorized error
        response.status(403).send('Invalid token');
      }
    } catch (e) {
      console.log(e);
    }
  } else {
    response.status(403).send('Invalid login');
  }
}

module.exports = bearer;
