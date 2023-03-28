# Event Driven Applications

Create a new application using real-time events

Your team will be responsible for planning, executing, and presenting an application that showcases an event driven architecture

## Requirements

Your application must employ the following programming concepts:

1. A "hub" server that moderates all events
1. Multiple "clients" that connect to the hub which can both publish and subscribe to events
1. Must operate over a network

Optional:

- Engage an API that uses a database to store/retrieve information based on the events being triggered
- Employ a standard "Queue" to ensure all messages are properly delivered
- Employ a FIFO "Queue" to ensure ordered delivery of some events

### Presentation

On the due-date, your team will present a working version of your project to the class showcasing the following:

- General Functionality
- Wiring (quick overview)
- Code Review

Plan for ~15 minutes for your team's presentation

## Project Ideas

- A simple game where multiple clients can take turns, using events, with the hub acting as the host
  - Closest to the number, Fastest person to type a word, etc
- A support/service center where customers place requests for help (tickets) and service workers assist and close tickets
- Re-Implement CAPS only using AWS SNS/SQS systems or Microsoft Azure Event Hubs

## Grading

Your team grade is based on the following factors:

1. % of the application that was completed
1. Code Quality
1. Presentation
