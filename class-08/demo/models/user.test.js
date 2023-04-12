'use strict';

const { sequelize, user } = require('./index');

beforeAll(async() => {
 await sequelize.sync();
});
afterAll(async () => {
  await sequelize.drop();
})

describe('Testing our models', () => {
  test('User should have a list of capabilities that depends on their role', async () => {
    let newUser = await user.create({
      username: 'test',
      password: 'test',
      role: 'admin'
    });

    expect(newUser.capabilities.includes('read')).toBeTruthy();
    expect(newUser.capabilities.includes('write')).toBeTruthy();
    expect(newUser.capabilities.includes('update')).toBeTruthy();
    expect(newUser.capabilities.includes('delete')).toBeTruthy();
  });

  test('User should only be able to read', async () => {
    let newUser = await user.create({
      username: 'test',
      password: 'test',
      role: 'user'
    });

    expect(newUser.capabilities.includes('read')).toBeTruthy();
    expect(newUser.capabilities.includes('write')).not.toBeTruthy();
  })
})
