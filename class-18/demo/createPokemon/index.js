const dynamoose = require('dynamoose');

const pokemonSchema = new dynamoose.Schema({
  name: String,
  type: String,
  abilities: String,
  id: String
});

const PokemonModel = dynamoose.model('Pokemon', pokemonSchema);

exports.handler = async (event) => {
  console.log("CREATE POKEMON EVENT OBJECT: ", event);
  // TODO implement
  const response = {
    statusCode: 500,
    body: JSON.stringify(`Create Pokemon Error`)
  }

  if (event.body) {
    response.body = JSON.stringify('Adding Pokemon record');
  } else {
    response.body = JSON.stringify(`Missing request body`);
  }
  return response;
};
