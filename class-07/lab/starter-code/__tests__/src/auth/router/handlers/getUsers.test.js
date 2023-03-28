'use strict';

process.env.SECRET = "TEST_SECRET";

const { db, } = require('../../../../../src/auth/models');
const { handleGetUsers } = require('../../../../../src/auth/router/handlers.js');

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});


describe('Router handler for getUsers', () => {

  const res = {
    send: jest.fn(() => res),
    status: jest.fn(() => res),
    json: jest.fn(() => res),
  }
  const next = jest.fn();

  test('Should fetch users and send user objects in the response', async () => {

    let req = {};

    await handleGetUsers(req, res, next);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.anything());
  });

});
