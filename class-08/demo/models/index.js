'use strict';

require('dotenv').config();
const { Sequelize } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL;
const createUser = require('./user.js');

const sequelize = new Sequelize(DATABASE_URL);
const UserModel = createUser(sequelize);

module.exports = {
  sequelize,
  user: UserModel,
}
