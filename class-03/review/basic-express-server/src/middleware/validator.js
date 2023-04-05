'use strict'

function validator(request, response, next) {
  if (!request.query.name) {
    next('No name found');
  } else {
    next();
  }
}

module.exports = validator;
