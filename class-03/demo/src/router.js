'use strict';

const express = require('express');
const router = express.Router();
const { Person } = require('./models/person');

router.get('/', readPerson);
// router.get('/:id', readPerson);
router.post('/', createPerson);
router.put('/:id', updatePerson);
// router.patch('/:id', updatePerson);
router.delete('/:id', deletePerson);

// const data = [];

// what is expected of the person router??
async function readPerson(request, response, next) {
  let data = await Person.findAll();
  response.json(data);
}

async function createPerson(request, response, next) {
  // const person = {
  //   name: request.body.name,
  //   foot: request.body.foot,
  //   eyeColor: request.body.eyeColor,
  //   age: request.body.age,
  //   id: data.length + 1
  // }
  // data.push(person);
  const person = await Person.create(request.body);
  response.json(person);
}

function updatePerson(request, response, next) {
  // who do we update??
  let id = request.params.id;
  const person = {
    name: request.body.name,
    foot: request.body.foot,
    eyeColor: request.body.eyeColor,
    age: request.body.age,
    id: id
  }
  // update the array
  let index = id - 1;
  data[index] = person;
  response.send(person);
}

function deletePerson(request, response, next) {}

module.exports = router;
