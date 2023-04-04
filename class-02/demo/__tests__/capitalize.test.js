'use strict';

const capitalizeMessage = require('../src/capitalize/capitalizeMessage');

describe('Testing the capitalize middleware', () => {
  test('Should capitalize a message and pass it to the next middleware', () => {
    const request = {
      query: {
        message: 'Jacob'
      }
    };
    const response = {};
    // since we don;t want to build next function, we just need to make sure it's called.
    const next = jest.fn();
    // const next = function() {}

    capitalizeMessage(request, response, next);
    expect(request.query.message).toEqual('JACOB');
    expect(next).toHaveBeenCalled();
  });

  test('If No message on the request, passes an error into next', () => {
    const request = {query: {}};
    const response = {};
    const next = jest.fn();

    capitalizeMessage(request, response, next);
    expect(next).toHaveBeenCalledWith('Please attach a message');
  })
});
