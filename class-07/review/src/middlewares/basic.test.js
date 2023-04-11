'use strict';

const basic = require('./basic.js');
const base64 = require('base-64');

describe('Testing the basic auth middleware', () => {
  test('Request contains all the proper credentials, expect next to be called', () => {

    const encodedMessage = base64.encode('username:password');

    const request = {
      headers: {
        authorization: `Basic ${encodedMessage}`
      }
    };
    const response = {}
    const next = jest.fn();

    basic(request, response, next);
    expect(next).toHaveBeenCalled();
  });

  test('No credentials present, response error status returned', () => {
    const request = {headers: {}};
    const response = {
      status: jest.fn(() => response),
      send: jest.fn(() => response),
      json: jest.fn(() => response),
    }
    const next = jest.fn();

    basic(request, response, next);
    expect(response.status).toHaveBeenCalledWith(403);
    expect(response.send).toHaveBeenCalledWith('Invalid login');
  });
})
