'use strict';

const { Sequelize } = require('sequelize');
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';

const createBand = require('./band.js');
const createBandMember = require('./bandMember.js');
const Collection = require('../lib/Collection.js');

const sequelize = new Sequelize(SQL_URL);
const BandModel = createBand(sequelize);
const BandMemberModel = createBandMember(sequelize);

// create our associations / relationships (from sequelize model method)
BandModel.hasMany(BandMemberModel, {foreignKey: 'bandId', sourceKey: 'id'});
BandMemberModel.belongsTo(BandModel, { foreignKey: 'bandId', targetKey: 'id'});

module.exports = {
  sequelize,
  Band: new Collection(BandModel),
  BandMember: new Collection(BandMemberModel)
};
