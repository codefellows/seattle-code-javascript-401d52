'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const SQL_URL = process.env.SQL_URL || "sqlite:memory:";
const sequelize = new Sequelize(SQL_URL);

const Boat = sequelize.define('Boat', {
  doesFloat:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  waterResistent: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('sail', 'motor', 'fishing', 'cruise'),
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = {
  sequelize,
  Boat
}
