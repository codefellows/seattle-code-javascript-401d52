'use strict';


const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.SECRET;

const { DataTypes } = require('sequelize');

const User = (sequelize) => {
  const model = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('user', 'admin', 'editor', 'writer'),
      allowNull: false,
      defaultValue: 'user'
    },
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({ username: this.username }, SECRET);
      }
    },
    capabilities: {
      type: DataTypes.VIRTUAL,
      get() {
        const acl = {
          user: ['read'],
          writer: ['read', 'write'],
          editor: ['read', 'update', 'delete'],
          admin: ['read', 'write', 'update', 'delete']
        }
        return acl[this.role]
      }
    }
  });

  model.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  model.authenticateToken = async function (token) {
    try {
      const parsedToken = await jwt.verify(token, process.env.SECRET);
      const user = await this.findOne({ where: { username: parsedToken.username } })
      if (user) { return user; }
      throw new Error("User Not Found");
    } catch (e) {
      throw new Error(e.message)
    }
  }

  return model;
}

module.exports = User;
