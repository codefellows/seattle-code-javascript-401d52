# Dynamic API Server

An Express/Node.js based server designed to be a "model agnostic" REST API server, which can perform CRUD operations on any data model

## Business Requirements

We're opening a online store! In order to support our web application, we need to create an API that will serve specific data (namely, categories and products) to our application. We will write an API to interface with our databases to provide category and product information to our front end app.

As it is highly likely that we will need more data types and sources in the future, it's imperative that we build this API as a standardized means of working with any data model, using any persistence system, though a common interface. The API Server must operate as follows:

### Support all REST/HTTP methods

- GET: Retrieve record(s) from a data source
  - All
  - One (by id)
  - Some (by filtering)
- POST: Create a new record in a data source
- PUT: Update a single full record in a data source
- PATCH: Update part of a single record in a data source
- DELETE: Delete a record in a data source

### Obey a standard routing structure

i.e. `http://amazingapi.com/api/v1/products/12345`

- `/api/v#` where # is the version number of our API
  - `/model` where 'model' is the name of the data model to operate on
    - `/id` where 'id' is the id number of a specific entity in the data model
- Allow for Query String parameters for filtering
  - i.e. `http://amazingapi.com/api/v1/products?category=electronics`
  - This would GET every entry in our products data model where the category is 'electronics'

### Obey a standard output format

- Results will be returned in JSON format
- Results will be served with the correct HTTP header - `application/json`
- The GET Route, when not retrieving by ID, must return a full header, with count ,pages, and a results array
- All other routes must return a single object, representing the state of the entity following the operation

#### Examples

##### GET Records (CRUD: READ)

GET MANY: `http://amazingapi.com/api/v1/products` or `http://amazingapi.com/api/v1.products?category=electronics`

```javascript
  {
    count: 300,
    previous: null,
    next: http://amazingapi.com/api/v1/products?page=2
    results: [
      { name: 'camera', ... },
      { name: 'phone', ... },
      { name: 'tv', ... },
      ...
    ]
  }
```

GET ONE: `http://amazingapi.com/api/v1/products/12345`

```javascript
  {
    id: 12345,
    name: 'camera',
    manufacturer: 'Nikon',
    model: 'xx435',
    price: 99.99,
    inStock: 2200,
    weight: 1.1
  }
```

##### CREATE Records (CRUD: CREATE)

POST: `http://amazingapi.com/api/v1/products`

Create requires that you **POST** a **JSON** object to the route that corresponds to the correct model (products, in this case) and returns an object representing what you created:

Request Body:

```javascript
  {
    id: 12345,
    name: 'camera',
    manufacturer: 'Nikon',
    model: 'xx435',
    price: 99.99,
    inStock: 2200,
    weight: 1.1
  }
```

Output

```javascript
  {
    id: 12345,
    name: 'camera',
    manufacturer: 'Nikon',
    model: 'xx435',
    price: 99.99,
    inStock: 2200,
    weight: 1.1
  }
```

##### UPDATE Records (CRUD: UPDATE)

PUT or PATCH: `http://amazingapi.com/api/v1/products/12345`

Updating records with **PUT** or **PATCH** requires a **JSON** object be given to a route that specifies both the model name and the record ID that represents the record you wish to update. The object given to the route is to be either the FULL object in the case of a **PUT**, or just the fields you wish to modify, in the case of a **PATCH**.  These operations must always return the object as it exists in the data source **after** your update operation.

For example, to change the price:

PUT Request Body:

```javascript
  {
    id: 12345,
    name: 'camera',
    manufacturer: 'Nikon',
    model: 'xx435',
    price: 109.99,
    inStock: 2200,
    weight: 1.1
  }
```

Output:

```javascript
  {
    id: 12345,
    name: 'camera',
    manufacturer: 'Nikon',
    model: 'xx435',
    price: 109.99,
    inStock: 2200,
    weight: 1.1
  }
```

PATCH Request Body:

```javascript
  {
    price: 109.99,
  }
```

Output:

```javascript
  {
    id: 12345,
    name: 'camera',
    manufacturer: 'Nikon',
    model: 'xx435',
    price: 109.99,
    inStock: 2200,
    weight: 1.1
  }
```

##### DELETE Records (CRUD: DELETE)

DELETE: `http://amazingapi.com/api/v1/products/12345`

This operation should remove the record with the given ID (12345) from the model (products). The return should be the state of that record in the database following the operation. Convention dictates an empty object be returned rather than `null`.

Sample Output:

```javascript
{}
```

## Technical Requirements

The application will be created with the following overall architecture and methodologies

1. Node.js
1. ES6 Classes and best practices
1. ExpressJS Web Server, built modularly
   - Middleware for handling 404 and 500 conditions
   - Middleware for handling the dynamic loading of the correct data model as specified in the route
     - Inspect the route, looking for the model name
     - `require()` the correct module model (i.e. if the model is categories, `require('src/models/categories/categories-model.js')`)
   - Use a single router (`v1.js`) to handle the ReST methods for CRUD for any model
     - `express.params` middleware
1. Persistence using a MongoDB Database (NoSQL)
1. Mongoose Schemas (data models) to define and model data
1. Mongoose Model "wrapper" class to serve as the API between the express server and the data models themselves
1. Test Driven Development, using Jest
   - Tests will be runnable locally
   - Tests will auto-execute (CI) in your repo using GitHub actions
   - Tests will use a 3rd party library called `supergoose` to:
     - "mock" the MongoDB running database
     - "mock" the running Express server
1. Deployment to the cloud

### Data Models

As we will be operating a virtual storefront, this application requires 2 data models to be fully functional

The following fields/data types must be supported by your data model

#### Categories

- name: Type: String, Required
- description: Type: String, Required

#### Products

- name: Type: String, Required
- category: Type: String, Required
- description: Type: String, Required
- price: Type: Number, Required
- inStock: Type: Number, Required

### Application Structure (proposed)

```text
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── v1.test.js
│   ├── 404.test.js
│   ├── 500.test.js
│   ├── model-finder.test.js
│   ├── mongo.js
├── lib
│   ├── api
│   │   ├── v1.js
│   ├── middleware
│   │   ├── 404.js
│   │   ├── 500.js
│   │   ├── model-finder.js
│   ├── models
│   │   ├── mongo.js
│   │   ├── categories
│   │   │   ├── categories-model.js
│   │   │   ├── categories-schema.js
│   │   ├── products
│   │   │   ├── products-model.js
│   │   │   ├── products-schema.js
│   ├── server.js
├── index.js
└── package.json
```

## Development Process, Milestones

1. **Phase 1: API Basics**
   - Use JSON Server (non-express) to mock the routes for testing purposes
1. **Phase 2: Basic API**
   - Create CRUD/ReST endpoints for categories and products
   - Separate route modules for each data model type
   - Store user created data in memory (no persistence)
   - Integrates with an online CI framework
1. **Phase 3: Persistence**
   - Replace the in-memory data store with mongo
   - Use MongoDB Collections for each data model type
1. **Phase 4: Dynamic Models**
   - Create a single model class that all data models can inherit from to keep the interface simple
   - Use middleware to load models based on param
     - i.e. Replace `app.get('/api/v1/categories')` and `app.get('/api/v1/products')` with `app.get('/api/v1/:model')`
   - API is Fully Documented
   - API is deployed and running live
