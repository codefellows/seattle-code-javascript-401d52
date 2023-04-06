'use strict';

const express = require('express');
const router = express.Router();
const { Boat } = require('../models/boat');

router.get('/', readBoats);

async function readBoats(request, response, next) {
  // let {name} = request.query;
  console.log('HITTING THE BOAT ROUTE');
  try {
    let data = await Boat.findAll();
    response.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
}

module.exports = router;
