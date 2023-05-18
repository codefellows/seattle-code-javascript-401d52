'use strict';

const Model = require('../mongo.js');
const schema = require('./categories-schema.js');

/**
 * Class representing a Category.
 * @extends Model
 */
class Categories extends Model {
  constructor() { super(schema); }
}

module.exports = Categories;
