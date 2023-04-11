'use strict';

const { Sequelize } = require('sequelize');
const createUser = require('./user.js');

const sequelize = new Sequelize('sqlite:memory:');

const userModel = createUser(sequelize);

module.exports = {
  User: userModel,
  sequelize,
}
