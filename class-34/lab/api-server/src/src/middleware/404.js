'use strict';
/**
 * 404 Middleware
 * @module middleware/404
 */

/**
 * Sends a JSON Formatted 404 Response
 * @param req {object} Express Request Object
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */
module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.status(404).json(error).end();
};