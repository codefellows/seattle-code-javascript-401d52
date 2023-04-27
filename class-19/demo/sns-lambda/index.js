'use strict';



exports.handler = async (event) => {
  console.log(event.Records[0].Sns);
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
