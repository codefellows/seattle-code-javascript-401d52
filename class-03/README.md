# Express REST API

## Overview

Express servers can quickly get big and out of control if you build them in one monolithic server file. There are many strategies for breaking the route handling logic into modules that "make sense" ... we'll be introducing the you to one such pattern today -- separate routers that contain all of the routing logic and handlers using `Express.router()`. In 301, we kept the route definitions in the server and imported the handler functions from other modules. There is more than one way to do it, and your applications can be seen through many lenses.

## Class Outline

<!-- To Be Completed By Instructor -->
- Code Review
- Warmup question
- Lecture

## Learning Objectives

### Students will be able to

#### Describe and Define

- External (modular) routing with Express

#### Execute

- Build a REST API server using Express.
- Use Sequelize models and schemas to perform CRUD operations.
- Respond to request Queries and Parameters in routes.
- Testing code that relies on a Postgres Database server.

## Notes

### CRUD Operations with REST and Express

- CREATE
  - `app.post('/resource')`
- READ All / LIST
  - `app.get('/resource')`
- READ One
  - `app.get('/resource/:id')`
- UPDATE
  - `app.put('/resource/:id')`
- DESTROY
  - `app.delete('/resource/:id')`

### Route Modules

- Normal node modules
- Require express just like your server
- Instantiate `express.router` instead of `express()`
- Export the route definitions
- The main server/app should require your route an then `use()` them
  - The server can prefix imported routes

#### Router

```javascript
const express = require('express');

const router = express.Router();

router.get('/mystuff', (req,res) => {
  const out = {
    fromParam: req.params.color,
    fromReq: req.color,
  };
  res.send(out);
});

module.exports = router;
```

#### Server

```javascript
const express = require('express');
const app = express();

// Bring in your custom routes
const customRoutes = require('./routes.js');

// Integrate them into (use them) in the app
app.use(customRoutes);
```

### Route Prefixes

When you `use()` a router, you can prefix all of it's routes from the server.  In this example, we've prefixed the custom routes module with **/custom**, which means that calls to <http://servername.com/mystuff> will no longer work as before. You'll now have to use <http://servername.com/custom/mystuff>

```javascript
const express = require('express');
const app = express();

const customRoutes = require('./routes.js');

// now, routes in the routes file will only work if /custom is in front of them.
app.use('/custom', customRoutes);

```

### Sequelize

In order to communicate with your SQL database, utilize the `sequelize` library and the `sequelize-cli` to communicate with your persistent data.  Use the following commands to perform database initialization and CRUD behaviors.

#### Initialize Database and Tables

Sequelize has a partner tool: `sequelize-cli` that can be used to configure your database: `npm install -g sequelize-cli`

1. Add the following scripts to your `package.json`:

    ```json
      "init:config": "sequelize init:config",
      "db:create": "sequelize db:create"
    ```
1. Use `sequelize-cli` to initialize our project with configuration files:
    1. Run the command `npm run init:config`.
    1. You will receive the following confirmation message:
    ```bash
    Sequelize CLI [Node: 18.9.1, CLI: 6.6.0, ORM: 6.29.3]

    Created "config/config.json"
    ```

1. Once your configuration file has been created, you can add your database environment details:

    1. Modify the username and database fields. 
    1. Ensure `postgres` is specified as the dialect in the `config/config.json`.  
    1. Your password should not be necessary unless this security feature has been enabled; setup did not instruct you to enable this feature. 
    1. This configuration will only be used for development.  You will test with `sqlite` and your deployed database will be self managed.
    1. The test and production objects do not need to be modified.

    ```json
    {
      "development": {
        "username": "your-username",
        "password": "not-necessary-unless-you-add-this-feature",
        "database": "your-database-name",
        "host": "127.0.0.1",
        "dialect": "postgres"
      },
      "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
      },
      "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
      }
    }
    ```
1. Once your config modification is complete, create your database by running `npm run db:create`.

With your database configured and created you can connect to our Database and perform sql operations:

```javascript
const Sequelize = require('sequelize');
const sequelize = new Sequlize('dialect://connection.string');


// we can initialize and reset our database once our sequelize instance is configured.

sequelize.sync(); // creates tables from all schemas associated with our sequelize instance.

sequelize.drop(); // removes tables and records.
```

#### Perform Basic SQL Operations

```javascript

// Defines a new table in our Database
const Food = sequelze.define({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  calories: {
    type: DataTypes.NUMBER,
    allowNull: true,
  }
});


Food.create({name: 'banana', calories: 200}); // Creates a new reord in our SQl table, filling in the 'name' and 'calories' columns.
Food.findAll();  // Reads a record where the id matches.

```

### SQL Shell Commands

| Command                                                   | Description                                                                    |
| --------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `psql`                                                    | Launch the postgres shell. Once in the shell, you should see `database-name=#` |
| `\l`                                                      | Show all databases                                                             |
| `\c <name>`                                               | Use database with the name `<name>`                                            |
| `\dt`                                                     | Show all tables in the current database                                        |
| `SELECT * FROM "table-name";`                             | List all the documents / records in the specified collection `table-name`      |
| `INSERT INTO "table-name" (<columns>) VALUES (<values>);` | Save a new record to the specified table `<table-name>`                        |
| `DROP TABLE "table-name";`                                | Completely removes the specified table `<table-name>`                          |

### Hosted Postgres Database

Once deployed, your application we won't be able to access your local postgres database so you need to connect to a machine running Postgres in the cloud.  This will allow you to always have a running instance of Postgres, with better hardware, more memory and faster network speeds.  Once set up, you can use a url much like you've been using to connect your application to your database.

1. Refer to the online documentation for [deploying a Postgres Database the cloud](https://render.com/docs/databases) and create a new database.
1. Add the connection string to an environment variable called `DATABASE_URL` in your deployed application.

```javascript
require('dotenv').config();

const POSTGRES_URI = process.env.DATABASE_URL;
```
