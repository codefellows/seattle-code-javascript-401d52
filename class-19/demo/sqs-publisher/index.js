'use strict';

const { v4: uuidv4 } = require('uuid');
const { Producer } = require('sqs-producer');
const AWS_REGION = 'us-west-2';
const AWS_QUEUE_URL = 'https://sqs.us-west-2.amazonaws.com/275199309843/MessageQueue';

const producer = Producer.create({
  queueUrl: AWS_QUEUE_URL,
  region: AWS_REGION,
});

producer.send({
  id: uuidv4(),
  body: 'Message from Node!',
}).then(data => {
  console.log('SQS MESSAGE DATA: ', data);
})
.catch(err => {
  console.log('SQS PRODUCER ERROR: ', err);
})
