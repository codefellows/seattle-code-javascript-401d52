'use strict';

function capitalizeMessage(request, response, next) {
  if (!request.query.message) {
    next('Please attach a message');
  } else {
    request.query.message = request.query.message.toUpperCase();
    next();
  }
}

module.exports = capitalizeMessage;
