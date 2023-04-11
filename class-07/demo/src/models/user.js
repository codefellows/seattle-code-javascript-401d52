'use strict';

require('dotenv').config();
const { DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.SECRET_STRING;

const User = (sequelize) => {
  const model = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({username: this.username}, SECRET);
      }
    }
  });

  model.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  return model;
}

module.exports = User;
