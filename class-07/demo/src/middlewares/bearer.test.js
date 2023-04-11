'use strict';

require('dotenv').config();
const bearer = require('./bearer.js');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_STRING;
const { sequelize, User } = require('../models');

beforeAll(async () => {
  await sequelize.sync();
  await User.create({
    username: 'test',
    password: 'test',
  });
});
afterAll(async () => {
  await sequelize.drop();
})

describe('Testing our bearer auth', () => {
  test('Should call next with a valid token', () => {
    const token = jwt.sign({
      username: 'test'
    }, SECRET);

    const request = {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
    const response = {
      send: jest.fn(() => response),
      status: jest.fn(() => response),
      json: jest.fn(() => response),
    }
    const next = jest.fn();

    bearer(request, response, next);
    expect(next).toHaveBeenCalled();
  });

  xtest('Should respond with a 403 if invalid token', () => {
    expect(true).toBe(false);
  });
})
