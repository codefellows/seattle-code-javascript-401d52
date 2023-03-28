# LAB: Message Queues

**CAPS Phase 3:** Complete work on a multi-day build of our delivery tracking system, adding queued delivery.

In this phase, we are going to implement a system to guarantee that notification payloads are read by their intended subscriber.   Rather than just triggering an event notification and hope that client applications respond, we're going to implement a "Queue" system so that nothing gets lost. Every event sent will be logged and held onto by the server until the intended recipient acknowledges that they received the message. At any time, a subscriber can get all of the messages they might have missed.

In this final phase, we'll be implementing a "Queue" feature on the Server, allowing `Driver` and `Vendor` clients to subscribe to messages added to `pickup` and `delivered` queues.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Building off of your previous day's branch, create a new branch for today called 'queue' and continue to work in your 'caps' repository.

## Business Requirements

Refer to the [CAPS System Overview](../../apps-and-libraries/caps/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 3 Requirements

In Phase 3, we are building a set of features to help manage deliveries made by CAPS Drivers. This will simulate a delivery driver receiving a list of orders from a Queue and "scanning" package codes on delivery. Retailers will be able to see in their dashboard or log, a list of all packages delivered in real time. Should a delivery driver deliver many packages while the retailer is not connected to the dashboard, the vendor client should be guaranteed to receive "delivery" notifications from the Queue system.

Here are the high level stories related to this new set of requirements.

- As a vendor, I want to "subscribe" to "delivered" notifications so that I know when my packages are delivered.
- As a vendor, I want to "catch up" on any "delivered" notifications that I might have missed so that I can see a complete log.
- As a driver, I want to "subscribe" to "pickup" notifications so that I know what packages to deliver.
- As a driver, I want to "catch up" on any "pickup" notifications I may have missed so that I can deliver everything.
- As a driver, I want a way to "scan" a delivery so that the vendors know when a package has been delivered.

And as developers, here are some of the development stories that are newly relevant to the above.

- As a developer, I want to create a system of tracking who is subscribing to each event.
- As a developer, I want to place all inbound messages into a "queue" so that my application knows what events are to be delivered.
- As a developer, I want to create a system for communicating when events have been delivered and received by subscribers.
- As a developer, I want to delete messages from the queue after they've been received by a subscriber, so that I don't re-send them.
- As a developer, I want to create a system for allowing subscribers to retrieve all undelivered messages in their queue.

## Technical Requirements / Notes

### Overview

We are adding a new module to the CAPS Application Server to *guarantee* that payloads from events are delivered to any Client Module that is listening for specific events.  This lab will have you refactoring the **Server** and **Client** Modules to facilitate storing of payloads Server side and removing them when received by clients.

- Our **Server** is going to have the same overall functionality, but we want to incorporate a few improvements to existing features:
  - We want a feature to keep a log of payloads that reach our system, organized by vendor and event type.
  - Payloads are "published" to the appropriate **Clients** for the appropriate events.
- Client **Vendor** Applications used by retailers, should subscribe to appropriate **Vendor** Queues so that they can be alerted when a delivery was made.
  - The **Client** can ask for all undelivered messages from a particular **Server** Queue.
  - When a **Client** receives a message, it will need to let the hub server know that it was received.

  ### Proposed File Structure

> Note:  The structure below shows both socket clients and the socket server in the same repo.  This is for learning and grading convenience, not a requirement.  Realistically, the socket server and each of the socket clients could be independent applications and repos.

```text
├── .github
│   ├── workflows
│   │   └── node.yml
├── clients
│   ├── driver
│   │   ├── handler.js
│   │   ├── index.js
│   │   └── driver-handler.test.js
│   ├── flower-vendor
│   │   ├── handler.js
│   │   ├── index.js
│   │   └── flower-handler.test.js
│   ├── lib
│   │   ├── client.js (optional)
│   │   └── client.test.js (optional)
│   ├── widget-vendor
│   │   ├── handler.js
│   │   ├── index.js
│   │   └── widget-handler.test.js
│   └── socket.js (socket instance useful for mocks/testing)
├── server
│   ├── lib
│   │   ├── queue.js
│   │   └── queue.test.js
│   └── index.js
├── .eslintrc.json
├── .gitignore
├── package.json
└── README.md
```

### Global Event Pool (HUB)

1. Use the `socket.io` npm package to configure an event Server that can be started at a designated port using node.
    - We still need the Server to configure socket connections to the `caps` namespace on a specified PORT.
    - Create a **Message Queue** that can store payloads for specific **Clients**.
      - Each payload that is read by the `pickup` event should be added to a Queue for **Driver** clients.
      - Each payload that is read by the `delivered` event should be added to a Queue for **Vendor** clients.
      - This could be as simple as an Object or Array, or as complex as a Module that connects to and performs operations against a database.
1. Add a `received` event to the Global Event Pool.
   - When this event is heard on the server, assume it's a Client Module telling you a payload was successfully read.
   - The payload should include the client id, event name, and message id, so that you can **delete** it from the Queue.
1. Add a `getAll` event to the Global Event Pool.
   - The payload should include the client id and event name.
   - When this event is heard on the server, find each of the messages in the queue for the client, for the event specified.
   - Go through each of the entries for the client/event in the queue (if any) and broadcast them to the client.
1. Refactor the `delivered`, `pickup`, and `in-transit` events in the Global Event Pool.
   - We need to be able to add payloads to the appropriate Queue for specific Clients.
   - When these events are triggered, add the payload immediately to the appropriate Queue.
   - Broadcast the same event, with the following payload to all subscribers.

    ```json
    {
      "messageID": "Unique-Message-ID",
      "payload": "<ORIGINAL_PAYLOAD>"
    }
    ```

### Vendor Client Application(s)

1. Create 2 separate "stores" that use the **Vendor** Client module.
   - Create one store called `acme-widgets` and `1-800-flowers`.
   - Connect to the CAPS Application Server using the `caps` namespace.
   - Both stores should "subscribe" to different Queues, since they are separate stores.
1. On startup, your client applications should trigger a `getAll` event that fetches all messages from the server that are in that **Vendor's** Queue (events/messages they've not yet received).
   - Trigger the `received` event with the correct payload to the server.
1. Subscribe to the `delivered` Queue.
   - Each client should be able to receive payloads "published" to the delivered Queue.
   - We still want to log a confirmation with the "order-id" and payload.

### Driver Client Application

1. Refactor event logic to use Queues.
   - Make sure your **Driver** Client is subscribing to the appropriate **Vendor** Queues.
   - Upon connection, **Driver** Client can fetch any messages added to their subscribed Queues.

## CODE QUALITY / ENGINEERING GOALS

Once you have the application fully functional, consider ways to enhance your implementation by drying out your code, making it easier to extend in the future.

Rather than simply putting all the required logic in every file, create a Queue class library that you can include in each of the client applications to uniformly communicate, subscribe, etc with the Queue server. Consider this a library that we could install on any **Client** that wants to use our Queue **Server**.

For example, this would be the ideal code for a client subscriber application, like the ones described above. Given this as your target, how would you implement a client side "Queue" library, noted in the code below to handle the above requirements?

```javascript
const Queue = require('./lib/queue.js');
const companyID = '1-206-flowers';
const clientID = 'driver';
const queue = new Queue(companyID);

queue.subscribe('delivered' delivered);
queue.trigger('getall', clientID);

function delivered(payload) {
  console.log('Flowers Were Delivered', payload.code);
}
```

### Stretch Goal

Abstract all socket.io-client functionality by building a class that takes in a vendor name as a queueId parameter.  Your class should:
- have a socket connection.
- join a room with the same name as queueId.
- have a publish method that:
  - takes in an event and a payload as parameters.
  - uses its local socket emit property to emit event and payload
    - i.e. if your constructor contains: `this.socket = io(SOCKET_SERVER_URL)`, then `this.socket.emit()` is a thing!
- have a subscribe method that:
  - takes in an event and a callback as parameters.
  - uses its local socket on property to listen for the event and ultimately will accept a `handler` as the callback once invoked.

### Visual Validation

- Start all 3 servers.
  - Queue Server.
  - Both Client Application Servers.
- Stop one of your applications servers.
  - Re-send some requests to your queue.
  - This should leave some undelivered messages.
  - Re-start the application server.
    - It should do an immediate request of all queued messages and log them normally.

### Testing

- Write tests around all of your units.
- Test event handler functions (not event triggers themselves).
- Use jest [spies](https://jestjs.io/docs/jest-object#jestfnimplementation) and/or [mock functionality](https://jestjs.io/docs/manual-mocks) to assert that your handlers were called and ran as expected. (was `console.log()` called with the expected arguments?)

## Assignment Submission Instructions

Refer to the the [Submitting Express Server Lab Submission Instructions](../../../reference/submission-instructions/labs/express-servers.md) for the complete lab submission process and expectations.
