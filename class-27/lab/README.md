# LAB - `useState()` Hook

**RESTy Phase 2:** Retrieving User Input and Managing State.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

> Continue working in your 'resty' repository, extending your previous work in a new branch called 'state'.

## Business Requirements

Refer to the [RESTy System Overview](../../apps-and-libraries/resty/README.md) for a complete review of the application, including Business and Technical requirements along with the development roadmap.

## Phase 2 Requirements

In phase 2, we will be receiving user input in preparation of connecting to live APIs, using the `useState()` hook in our functional components.  In order to properly manage state with the useState hook, we will now convert `<App />` to a functional component.

The following user stories detail the major functionality for this phase of the project.

- As a user, I want to enter the REST Method and URL to an API.
- As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format.

Application Flow:

- User enters an API URL.
- Chooses a REST Method.
- Clicks the  "Go" button.
- Application fetches data from the URL given, with the method specified.
- Displays the response headers and results separately.
- Both headers and results should be "pretty printed" JSON.

> One possible design/layout. Please use your judgement and taste in styling your version of this application.

![Resty](resty.png)

## Technical Requirements / Note

> Extend your React Application so that your functional components are able to manage their own state variables using the `useState()` Hook.  
> NOTE: It is not a requirement to make the actual API call. That can be mocked with "fake" data.

1. Refactor any components using `this.setState()` to implement the `useState()` react API hook.
1. Refactor the Form Component to implement user input from form elements, instead of hard coded string values.

Suggested Component Hierarchy and Application Architecture:

- `index.js` - Entry Point.
- `<App />` - Container.
  - Holds application state: The Request (from the form) and the Response (from the API).
  - Hook that can update state.
  - Renders 2 Child Components.
- `<Form />`
  - Expects a function to be sent to it as a prop.
  - Renders a URL entry form.
  - A selection of REST methods to choose from ("get" should be the default).
    - The active selection should be displayed/styled differently than the others.
  - Renders a Textarea to allow the user to type in a JSON object for a POST or PUT request.
  - On submit:
    - Send the Form entries back to the `<App />` using the method sent down in props.
    - Form will run the API request.
      - Toggle the "loading" status before and after the request.
- `<Results />`
  - Conditionally renders "Loading" or the data depending on the status of the request.
  - Expects the count, headers, results to be sent in as props.
  - Renders the count.
  - Renders the Result Headers as "pretty" JSON.
  - Renders the Result Body as "pretty" JSON.

## Proposed File Structure

In this proposal:
- Utilize [Airbnb React/JSX Style Guide](https://airbnb.io/javascript/react/) conventions.
- Unit tests are placed in the component directory (testing one file only).
- Integration tests are placed in the `__tests__` directory (testing more than one file).

```text
├── .github
│   ├── workflows
│   │   └── node.yml
├── public
├── src
│   ├── __tests__
│   │   │   └── App.test.jsx (integration test)
│   ├── Components
│   │   ├── Footer
│   │   │   ├── Footer.scss
│   │   │   ├── Footer.test.jsx (unit test)
│   │   │   └── index.jsx
│   │   ├── Form
│   │   │   ├── Form.scss
│   │   │   ├── Form.test.jsx 
│   │   │   └── index.jsx
│   │   ├── Header
│   │   │   ├── Header.scss
│   │   │   ├── Header.test.jsx 
│   │   │   └── index.jsx
│   │   └── Results
│   │       ├── index.jsx
│   │       ├── Results.scss
│   │       └── Results.test.jsx
│   ├── App.jsx
│   ├── App.scss
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## Tests

- Utilize the React Testing Library framework installed with CRA.
- Assert that upon form submission the resulting data will be rendered in the output area.
- Install the GitHub action that will auto-run your tests on all check-ins.

## Stretch Goals

Connect the App component to an API and make an actual call (focusing on GET) to the URL requested in the form.

## Assignment Submission Instructions

Refer to the the [Submitting React Apps Lab Submission Instructions](../../../reference/submission-instructions/labs/react-apps.md) for the complete lab submission process and expectations.
