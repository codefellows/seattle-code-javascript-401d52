'use strict';

const Model = require('../mongo.js');
const schema = require('./notes-schema.js');

/**
 * Class representing a Note
 * @extends Model
 */
class Notes extends Model {
  constructor() { super(schema); }
}

module.exports = Notes;
