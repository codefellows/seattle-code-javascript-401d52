# LAB: Data Modeling

Dynamic API Phase 3: Add Database Abstraction and Associations to your API

> Today's lab features a paired code review to further reinforce your learnings. For the first hour of today's lab, you will engage with your lab partner, review each others code, and comment **why** the code exists. To get started, fork and clone your partner's `api-server` lab. For the first half hour, one of you will explain, line by line, what your partner's code does and leave appropriate, concise comments. For the second half hour, you'll swap; the other person will explain, line by line, what the other's code does. Be sure to cover any functionality that was not previously discussed during the first half hour of review.  Each partner should `ACP`, and create a PR back to the owner's repo. Share your PR link with your partner and insert both links into your [documentation](#documentation). The choice of whether or not to merge each PR lies with the repo owner.  After this hour of code review, no further partnership is required for the lab. 

## Before you begin

1. Refer to the *Getting Started* guide  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md)
1. Work in your `api-server` repository from lab-03.
1. Work in a new branch called `modeling`, created from `main`.
1. Following completion of this assignment, create a Pull Request from `modeling` to `main` and merge your code.
   - You will deploy from your `main` branch to the cloud.
   - You will add a link to the PR that you merged in your README for grading purposes.

## Phase 3 Requirements

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a **Postgres SQL Database**, using the REST standard.  One endpoint should include related data joined from two or more tables within your database.

### Data Models

- Create 2 SQL data models using Sequelize, exported as Node Modules that represent related data
  - e.g. "authors and books", "recipe and ingredients", etc.
- Create a Collection Class that accepts a Sequelize Model into the constructor and assigns it as `this.model`
  - This class should have the following methods defined, to perform CRUD Operations
    - Each method should in turn call the appropriate Sequelize method for the model
    - `create()`
    - `read()`
    - `update()`
    - `delete()`
- Add an association between your models.  Utilize the [Sequelize docs](https://sequelize.org/docs/v6/core-concepts/assocs/) if helpful.
  - **One-To-One** association:
    - GET on the `hasOne` side should include the entire entity it has.
    - GET on the `belongsTo` side should include a property with a link to the entity it belongs to.
  - **One-To-Many** association:
    - GET on the `hasMany` side should include a property with the URL to access the list of items it has.
      - Hint: use a nested route on the parent collection, or a query parameter with the parent ID.
    - GET on the `belongsTo` side should include a property with a link to the entity it belongs to.
  - **Many-To-Many** association:
    - GET will involve two `belongsToMany` associations both of which include a property with a link to the entity it belongs to through a 3rd join table.

> For the data models, you are free to choose your own data types and describe their fields ... For Examples: food and ingredients, animal and care, author and books, movie and quotes, car, instrument, game

### Routes

In your express server, create a router module for each data model that you've created. Within the router module, create REST route handlers for each of the REST Methods that properly calls the correct CRUD method from the matching data model.

> For the following examples, we'll use 'food`

#### Add a Record

- CRUD Operation: Create
- REST Method: POST
- Path: /food
- Input: JSON Object in the Request Body
- Returns: The record that was added to the database.
  - You must generate an ID and attach it to the object.
  - You should verify that only the fields you define get saved as a record.

#### Get All Records

- CRUD Operation: Read
- REST Method: GET
- Path: /food
- Returns: An array of objects, each object being one entry from your database.

#### Get One Record

- CRUD Operation: Read
- REST Method: GET
- Path: /food/1
- Returns: The object from the database, which has the id matching that which is in the path.

#### Update A Record

- CRUD Operation: Update
- REST Method: PUT
- Path: /food/1
- Input: JSON Object in the Request Body
- Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data.
  - You should verify that only the fields you define get saved as a record.

#### Delete A Record

- CRUD Operation: Destroy
- REST Method: DELETE
- Path: /food/1
- Returns: The record from the database as it exists after you delete it (i.e. `null`).

### Implementation Notes

- Create an express server with the following proposed structure

```text
├── .github
│   ├── workflows
│   │   └── node.yml
├── config
│   ├── config.json
├── __tests__
│   ├── server.test.js
├── src
│   ├── error-handlers
│   │   ├── 404.js
│   │   ├── 500.js
│   ├── middleware
│   │   ├── logger.js
│   │   ├── logger.test.js
│   │   ├── validator.js
│   ├── models
│   │   ├── collection.js
│   │   ├── index.js
│   │   ├── food
│   │   │   ├── index.js
│   │   ├── clothes
│   │   │   └── index.js
│   ├── routes
│   │   ├── food.js
│   │   └── clothes.js
│   └── server.js
├── .eslintrc.json
├── .gitignore
├── index.js
├── package.json
└── README.md
```

- In your server.js, `require()` your router modules, and `use()` them
- In your routers
  - `require()` the correct data model
  - `require()` the collection class
  - Make a new instance of the collection, using the model as a parameter
  - Your routes, if you followed the API pattern from your previous assignments should already be set up to call the right methods in your collection
    - Remember, Sequelize methods are asynchronous. Be sure and account for this!

### Testing Requirements

- Be sure to specify `NODE_ENV=test` in your package.json test script.
- Assert the following
  - 404 on a bad route
  - 404 on a bad method
  - The correct status codes and returned data for each REST route
    - Create a record using POST
    - Read a list of records using GET
    - Read a record using GET
    - Update a record using PUT
    - Destroy a record using DELETE

### Deployment

Your server must be deployed to the cloud. Please note the deployed URL in your README!

### Stretch Goal

Currently, as you add new models (imagine a system with 100 or more data models), you need to continually build new routes to use each model. Given that the code in the route modules is virtually identical (save for the `require()` of the correct data model), we should find a way to DRY this system.

- Create a new route module called `v1` as a copy of one of your other, working routes
- `require()` and `use()` this new router in your server
  - Assign the `/api/v1` prefix to these routes.
- Devise a way that you can `require()` the correct data model file based on the route
  - i.e.
    - `http://localhost:3000/api/v1/clothes` should require and use the file `models/clothes.js`
    - `http://localhost:3000/api/v1/food` should require and use the file `models/food.js`
  - Hint: use a route parameter along with middleware... you might need to do some research
- Once you have this working, delete your other (now no longer needed) route modules and the references to them in your server

## Documentation

Document the code review process as a lab-04 feature on your README.  
- Who was your partner?
- What was your key takeaway?
- Share the link to your PR request.
- Share the link to their PR request.

## Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations
