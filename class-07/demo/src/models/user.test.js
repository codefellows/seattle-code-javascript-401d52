'use strict';

const { sequelize, User } = require('./index');

beforeAll(async () => {
  await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
});

describe('Testing the user model', () => {
  test('User record should create a token', async () => {

    let newUser = await User.create({
      username: 'test',
      password: 'test',
    });

    expect(newUser.token).toBeTruthy();
    expect(newUser.password).not.toEqual('test');
  });
})
