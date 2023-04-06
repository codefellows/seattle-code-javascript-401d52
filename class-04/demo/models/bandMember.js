'use strict';

const { DataTypes } = require('sequelize');

const BandMember = (sequelize) => {
  return sequelize.define('Band Member', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    canSing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    instrument: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numberOfLimbs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bandId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
}

module.exports = BandMember;
