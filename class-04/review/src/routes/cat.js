'use strict';

const express = require('express');
const router = express.Router();
const { Cat } = require('../models/cat');

router.get('/', readCats);

async function readCats(request, response, next) {
  // let {name} = request.query;
  console.log('HITTING THE CAT ROUTE');
  try {
    let data = await Cat.findAll();
    response.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
}

module.exports = router;
