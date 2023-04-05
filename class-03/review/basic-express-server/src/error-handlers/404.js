'use strict'

function handle404(request, response, next)  {

  response.status(404).send('Page not found')
  next();
  
}

module.exports = handle404