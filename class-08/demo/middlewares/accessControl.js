'use strict';

const accessControl = (capability) => (request, response, next) => {
  if (request.user) {

    if (request.user.capabilities.includes(capability)) {
      next();
    } else {
      response.status(403).send('Unauthorized');
    }

  } else {
    response.status(403).send('Authentication error');
  }
}

module.exports = accessControl;
