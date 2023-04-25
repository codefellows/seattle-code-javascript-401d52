'use strict';

const handler = require('./index');

describe('Testing the the lambda function', () => {
  test('Handles an s3 upload event', async () => {
    const event = {
      Records: []
    }


    let response = await handler(event);
  });
})
