'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Testing server', () => {
  test('This should come back with 404 on a bad route', async () => {
    const response = await request.get('/nonexistent-endpoint');
    expect(response.status).toEqual(404);
  });

  test('404 for bad method', async () => {
    const response = await request.post('/person');
    expect(response.status).toEqual(404);
  });

  test('This should come back with 500 with no name in query', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  });

  test('This should come back with 200 with name in the query', async () => {
    const response = await request.get('/person?name=w');
    expect(response.status).toEqual(200);
  });

  test('Name was successfully located', async () => {
    const response = await request.get('/person?name=k');
    expect(response.status).toEqual(200);
    expect(response.body).toMatchObject({ name: 'k' });
  });
});
