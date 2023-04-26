const dynamoose = require('dynamoose');

const pokemonSchema = new dynamoose.Schema({
  name: String,
  type: String,
  abilities: String,
  id: String
});

const PokemonModel = dynamoose.model('Pokemon', pokemonSchema);

exports.handler = async (event) => {
  console.log("READ POKEMON EVENT OBJECT: ", event);
  // TODO implement
  let parameters = event.pathParameters;
  let responseBody = null;

  if (parameters) {
    console.log('REQUEST PATH PARAMS:', parameters);
    responseBody = await PokemonModel.scan('id').eq(parameters['id']).exec();
  } else {
    responseBody = await PokemonModel.scan().exec();
  }
  console.log('POKEMON FROM OUR TABLE: ', responseBody);
  const response = {
    statusCode: 200,
    body: JSON.stringify(responseBody),
  };
  return response;
};
