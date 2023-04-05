'use strict';

const { sequelize, Person } = require('./src/models/person.js');

sequelize.sync().then(async () => {
  console.log('database initialized');

  let newPerson = await Person.create({
    name: 'Jacob',
    age: 33,
    foot: true,
    eyeColor: 'blue'
  });

  console.log('New Person!!', newPerson);

}).catch(error => console.log(error));
