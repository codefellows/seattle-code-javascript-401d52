'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const roles = require('./roles-model.js');

const SINGLE_USE_TOKENS = !!process.env.SINGLE_USE_TOKENS;
const TOKEN_EXPIRE = process.env.TOKEN_LIFETIME || '60m';
const SECRET = process.env.SECRET || 'supersecret';

const usedTokens = new Set();

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullname: { type: String },
  email: { type: String },
  role: { type: String, default: 'user', enum: ['admin', 'editor', 'writer','user'] },
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });

users.virtual('acl', {
  ref: 'roles',
  localField: 'role',
  foreignField: 'role',
  justOne: true,
});

users.pre('findOne', function () { this.populate('acl'); });
users.post('save', async function () { await this.populate('acl').execPopulate(); });

users.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

users.statics.createFromOauth = function (record) {

  if (!record) { return Promise.reject('Validation Error'); }

  return this.findOne({ username: record.username })
    .then(user => {
      if (!user) { throw new Error('User Not Found'); }
      console.log('Welcome Back', user.username);
      return user;
    })
    .catch(error => {
      console.log('Creating new user');
      let username = record.username;
      let password = 'phoneybaloney';
      return this.create({ username, password });
    });

};

users.statics.authenticateToken = function (token) {

  if (usedTokens.has(token)) {
    console.log('unique fail');
    return Promise.reject('Invalid Token');
  }

  try {
    let parsedToken = jwt.verify(token, SECRET);
    (SINGLE_USE_TOKENS) && parsedToken.type !== 'key' && usedTokens.add(token);
    let query = { _id: parsedToken.id };
    return this.findOne(query);
  } catch (e) { throw new Error('Invalid Token'); }

};

users.statics.authenticateBasic = function (username, password) {
  let query = { username };
  return this.findOne(query)
    .then(user => user && user.comparePassword(password))
    .catch(error => { throw error; });
};

users.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

users.methods.generateToken = function (type) {

  let token = {
    id: this._id,
    capabilities: this.acl ? this.acl.capabilities : [],
    type: type || 'user',
  };

  let options = {};
  if (type !== 'key' && !!TOKEN_EXPIRE) {
    options = { expiresIn: TOKEN_EXPIRE };
  }

  return jwt.sign(token, SECRET, options);
};

users.methods.can = function (capability) {
  return this.acl.capabilities.includes(capability);
};

users.methods.generateKey = function () {
  return this.generateToken('key');
};

module.exports = mongoose.model('users', users);
