'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  region: 'us-west-2',
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/275199309843/MessageQueue',
  handleMessage: async (message) => {
    let data = JSON.parse(message.Body);
    console.log(data);
  },
});

app.start();
