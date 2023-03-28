# Auth Module Final Project

Create a new application using your API Server and Authentication System learnings.

Your team will be responsible for planning, executing, and presenting an application that showcases a Content Management System (CMS) using full RESTful CRUD operations.  

## The Goal and The Why

Time to build something cool! You've learned so much and as a class we've covered a lot of material.  By giving you the opportunity to build and deploy an Auth Server, you gain fluency, foster understanding, and put your new skills to work.  You may build something that looks and functions similar to lab-08, or perhaps you build something that surpasses lab-08.  Either way, the goal of this lab is to reinforce any learnings that might need reinforcing.

## Requirements

Your application must employ the following programming concepts:

1. API Auth server must be deployed.  A single, backend application is expected
1. Use of your API server to perform database operations
1. Use of login/auth/acl to control access to your resources

### Presentation

On the due-date, your team will present a working version of your project to the class showcasing the following:

- General Functionality
- Wiring (quick overview)
- Code Review

Plan for ~15 minutes for your team's presentation, actual presentation time may be adjusted based on class needs.

## Project Ideas

- a business model with a specific problem domain:
  - Ice Cream shop with a loyalty program.  Users, Flavors, and Favorites database tables with some relations might make sense. 
  - Pet Rescue that screens users and has multiple pet options (dog, cat, maybe more) possibly accommodating more specific human/animal needs or preferences. Users, Dogs, & Cats tables might exist with relations.  A 3rd party API could be used to find actual adoptable pets in the users area.
- A command line application that prompts a user to:
  - Create an account with a password
  - Login with an account
  - Edit account details
  - Delete an account
  - *Look into node modules such as Inquirer for inspiration*
- A clone of an HTTP REST client that can run requests against your API easily and shows the results.
- A command line application that lets you enter a note (a sentence) and stores it to a database, and later get a list of your notes

## Recommended Workflow

> Reminder: Proof of life as you develop is the sustainable and logical workflow

- Draw a UML
- Document expected file structure, create files as needed.
- Build your repo from scratch.  
- Pair program and do not divide & conquer; Get the most benefit from teammate perspectives.
- Demonstrate proof of life at every step. TDD, console log, run your server, use your REST client tools to confirm step by step:
  - Express app runs
  - sequelize wired up / Database is created
  - models work, tables are created
  - basic auth middleware works
  - bearer auth middleware works
  - now that user functonality works, create other model routes
  - enforce RBAC
  - confirm end to end functionality

## Grading

Your team grade is based on the following factors:

1. % of the application that was completed
1. Code Quality
1. Presentation
