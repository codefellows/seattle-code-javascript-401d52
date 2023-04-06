'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const db1 = require('../src/models/cat.js');
// bring in boats db object
const db2 = require('../src/models/boat.js');
const request = supertest(server.app);

// start database for testing
beforeAll(async () => {
  await db1.sequelize.sync(); // connects and creates table (setup)
  await db2.sequelize.sync();
})
afterAll(async () => {
  await db1.sequelize.drop();// teardown removes all things in the table
  await db2.sequelize.drop();
})


describe('Testing our server routes, for Cats.', () => {
  test('404 bad route', async () => {
    let response = await request.get('/taco');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });
  test('404 bad method', async () => {
    let response = await request.patch('/cat');
    expect(response.status).toEqual(404);
    expect(response.body).toEqual({});
  });
  test('200 for READ ALL cats', async () => {
    let response = await request.get('/cat');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
  xtest('200 for READ ONE cat', () => { });
  xtest('200 for CREATE cats', () => { });
  xtest('200 for UPDATE cats', () => { });
  xtest('200 for DELETE cat', () => { });
});


describe('Testing the server routes for boats', () => {
  test('200 for READ ALL boats', async () => {
    let response = await request.get('/boat');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  })
});


