'use strict';

const supertest = require('supertest');
// we need our singleton
const app = require('./server.js');
const request = supertest(app);

describe('As a user I want to send a request and get a capitalized message', () => {

  test('Should return JACOB when sending a GET request to /capitalize-me', async () => {
    let response = await request.get('/capitalize-me?message=Jacob');
    expect(response.text).toEqual('JACOB');
  });
});
