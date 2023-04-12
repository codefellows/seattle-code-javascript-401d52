'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const accessControl = require('./middlewares/accessControl.js');
const basic = require('./middlewares/basic.js');
const bearer = require('./middlewares/bearer.js');
const PORT = process.env.PORT;
const { sequelize, user } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup', async (request, response) => {

  const newUser = await user.create(request.body);
  response.json({ user: newUser, token: newUser.token });

});

app.get('/articles', bearer, accessControl('read'), (request, response, next) => {
  response.send('You made it');
});
// app.post('/arictiles')

sequelize.sync()
.then(() => {
  app.listen(PORT, () => {
    console.log('App is listening!');
  })
})


