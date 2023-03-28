# Node Ecosystem, TDD, CI/CD

## Overview

Application development in the Node.js ecosystem, including the writing of modular code using CommonJS modules, writing tests to assert code quality, setting up and working in a "Continuous Integration"  environment (Github Actions).

## Class Outline

- Kick-off and Introductions
- Course Overview
- Setup Questions

## Learning Objectives

### Students will be able to

#### Describe and Define

- Node and the V8 Engine

#### Execute

- Setup a Node.js Package using npm
- Create CommonJS modules
- Create a simple express server
- See passing tests via CI using GitHub actions (Continuous Integration)
- Deploy to the cloud using CD (Continuous Deployment)

## Notes

### Importing and Exporting Modules

If one module **exports** a function or an object ...

```javascript
// person.js
const person = {};

person.walk = function() {
  return 'walking';
}

module.exports = person;
```

Another module can **import** and use that function or object

```javascript
const human = require('./person.js'))
console.log( human.walk() );  // prints 'walking'
```

### CI/CD - Continuous Integration and Deployment

In your lab today, you'll be doing a full "professional" deployment using 2 branches, PR's, and a continuous process to get your code deployed.

You will repeat this process for every server based lab moving forward. Keep these notes (and the lab steps) handy for future reference
