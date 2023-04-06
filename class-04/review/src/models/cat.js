require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const SQL_URL = process.env.SQL_URL || "sqlite:memory:";
const sequelize = new Sequelize(SQL_URL);


// defines a table
const Cat = sequelize.define("Cat", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sex: {
    type: DataTypes.ENUM('m', 'f'),
    allowNull: false
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = {
  sequelize,
  Cat,
};
