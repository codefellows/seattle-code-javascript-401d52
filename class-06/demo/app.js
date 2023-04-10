'use strict';

require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const cors = require('cors');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');
const PORT = process.env.PORT || 3001;
const SQL_URL = process.env.SQL_URL || 'sqlite:memory:';

const sequelize = new Sequelize(SQL_URL);

const UserModel = sequelize.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type:  DataTypes.STRING,
    allowNull: false
  }
});

UserModel.beforeCreate(async user => {
  user.password = await bcrypt.hash(user.password, 10);
});

app.use(cors());
app.use(express.json());

async function basicAuth(request, response, next) {
  // auth stuff occurs
  console.log(request.headers.authorization);
  if (!request.headers.authorization) {
    response.status(401).send('NO AUTH CREDENTIALS');
    return;
  }
  // check if user lives in our DB
  let credentials = base64.decode(request.headers.authorization.split(' ')[1]); // Basic Jacob:password
  let userName = credentials.split(':')[0];
  let password = credentials.split(':')[1];

  // query db find User where username === userName
  let userFromDB = await UserModel.findOne({ where: {username: userName }});
  if (!userFromDB) {
    response.status(401).send('No User found');
    return;
  }

  // compare the password from the request with the password stored in the DB.
  let isAuthentic = await bcrypt.compare(password, userFromDB.password);
  if (isAuthentic) {
    next();
  } else {
    response.status(401).send('Unauthorized');
  }
}

// hit this route before any middleware
app.post('/signup', async (request, response, next) => {
  let newUser = await UserModel.create(request.body);
  response.json(newUser);
});

app.use(basicAuth);

app.get('/message', (request, response, next) => {
  let messages = [
    {text: "I am a message"},
  ];

  response.json(messages);
});

// we had do this last week =>
// ensures that the tables are created and all the columns are defined.
//  makes sure we can connect.
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('SERVER is running :', PORT);
  })
})
