'use strict';

const { DataTypes } = require('sequelize');
// const sequelize = require('./index.js');

const Band = (sequelize) => sequelize.define('Band', {
  type: {
    type: DataTypes.ENUM('rock', 'rap', 'psychedelic', 'experimental', 'pop', 'punk'),
    defaultValue: 'rock',
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  onTour: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  memberNum: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Band;
