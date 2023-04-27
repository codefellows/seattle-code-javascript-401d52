'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' });

const sns = new AWS.SNS();

const input = process.argv[2]; //  this accesses command line arguments

const topic = 'arn:aws:sns:us-west-2:275199309843:message';

const payload = {
  Message: input,
  TopicArn: topic
}

sns.publish(payload).promise()
.then(data => {
  console.log("message published!!", data);
})
.catch((e) => {
  console.log('SNS message error: ', e);
});
