'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

// here is our connection
const SQL_URL = process.env.SQL_URL || "sqlite:memory:";

// provide your connection string
const sequelize = new Sequelize(SQL_URL);

// defines a table
const Person = sequelize.define("Person", {
  // each of these is a column in the table
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  foot: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  eyeColor: {
    type: DataTypes.ENUM('blue', 'brown', 'green', 'pink'),
    defaultValue: 'brown',
    allowNull: false
  }
});

module.exports = {
  sequelize,
  Person,
};
