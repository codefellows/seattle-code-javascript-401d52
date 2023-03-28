# LAB: Authentication

**Authentication System Phase 1:** Deploy an Express server that implements Basic Authentication, with signup and signin capabilities, using a Postgres database for storage.

## Before you begin

Create a UML diagram of the authentication system on a whiteboard before you start

1. Refer to the *Getting Started* guide  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md).
1. Create a new repository called `basic-auth`.
1. Copy the files from within the `starter-code` folder of your class repository into your new repo as a starting point.
1. Work in a new branch called `dev`, created from `main`.
1. Following completion of this assignment, create a Pull Request from `dev` to `main` and merge your code.
   - You will deploy from your `main` branch to a new app at your cloud service provider.
   - You will add a link to the PR that you merged in your README for grading purposes.

## Business Requirements

Refer to the [Authentication System Overview](../../apps-and-libraries/auth-server/README.md) for a complete review of the final application, including Business and Technical requirements along with the development roadmap.

## Phase 1 Requirements

Today, we begin the first of a 3-Phase build of an authentication system, written in Express. The following core requirements detail the functionality for this phase of the project.

### As a user, I want to create a new account so that I may later login

- Using an HTTP REST client or a web form:
  - Make a **POST** request to the`/signup` route with `username` and `password`.
  - Your server should support both JSON and FORM data as input.
  - On a successful account creation, return a **201** status with the user object in the body.
  - On any error, trigger your error handler with an appropriate error.

### As a user, I want to login to my account so that I may access protected information

- Using am HTTP REST client, or a web form:
  - Make a **POST** request to the `/signin` route.
  - Send a basic authentication header with a properly encoded username and password combination.
  - On a successful account login, return a **200** status with the user object in the body.
  - On any error, trigger your error handler with the message "Invalid Login".
  
### Application Structure (proposed)

> NOTE: The majority of our work for this server will be done within the `src/auth` folder. The rest of the system should be generic express. Why? It's our intention to be able to "lift" the `auth` folder and "drop" it into any other server (such as our API server) and be able to use authorization to "protect" those CRUD routes. This makes our entire auth system very modular. Think of `index.js` and `server.js` as nothing more than the basics to get a server started, with 100% of the actual logic living within the `auth` module

```text
├── .github
│   ├── workflows
│   │   └── node.yml
├── config
│   ├── config.json
├── __tests__
│   ├── server.test.js (integration test)
├── src
│   ├── auth
│   │   ├── middleware
│   │   │   ├── basic.js
│   │   ├── basic.test.js
│   │   ├── models
│   │   │   ├── index.js
│   │   │   └── users-model.js
│   │   ├── router.js
│   ├── middleware
│   │   ├── 404.js
│   │   ├── 404.test.js  (unit test)
│   │   └── 500.js
│   └── server.js
├── .eslintrc.json
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Technical Requirements / Notes

> You have been supplied a "monolithic" express server in the `starter-code` folder which fulfills the above requirements. To complete the work for this phase, refactor the provided server using best practices, modularizing the code and providing tests, as follows:

### Basic Server

- Extract the core server logic into 2 files:
  - `index.js` (entry point)
    - Connect to the database
    - Require the 'server' and start it
  - `server.js` service wiring
    - Exports an express app/server and a start method

### Authentication Modules

Keep your authentication related files in a folder called `/auth` so they are independent of the server itself.

- Extract the authentication logic for `/signin` as middleware.
  - Create a new node module.
  - Interact with the headers and the users model.
  - Add the user record (if valid) to the request object and call `next()`.
  - Call `next()` with an error in the event of a bad login.
- Extract the Sequelize Model into a separate module.
  - Model the user data.
  - Add a before-create hook in the model ... Before we save a record:
    - Hash the plain text password given before you save a user to the database.
  - Create a method in the schema to authenticate a user using the hashed password.
- Create a module to house all of routes for the authentication system.
  - Create a POST route for `/signup`
    - Accepts either a JSON object or FORM Data with the keys "username" and "password".
    - Creates a new user record in a Postgres database.
    - Returns a 201 with the created user record.
  - Create a POST route for `/signin`.
    - Use your basic authentication middleware to perform the actual login task.
    - `router.post('/signin', basicAuth, (req,res) => {});`
    - When validated, send a JSON object as the response with the following properties:
      - `user`: The users' database record

### Testing

You should manually test your routes using an HTTP REST client, either in the terminal or an HTTP REST client with a GUI.
Additionally, you are required to write automated tests as well:

- POST to /signup to create a new user.
- POST to /signin to login as a user (use basic auth).
- Need tests for auth middleware and the routes.
  - Does the middleware function (send it a basic header).
  - Do the routes assert the requirements (signup/signin).
- This is going to require more "end to end" testing than you've done in the past.
  - To test signin, your tests actually need to create a user first, then try and login.  i.e. The signin test will rely on the success of the signup test.

## Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations.
