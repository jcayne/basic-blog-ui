The UI for a basic blog that displays text and allows for comments.

# Running the application
1. Install the pre-requisite software:
  - [Node.js](https://nodejs.org)
2. From the folder directory, install the Node.js dependencies:
  - `npm install`
3. Run the application:
  - `npm start`
4. In another terminal, run the tests:
  - `npm test`


# Release notes
- [v2.0.2](./README.md/#v202)
- [v2.0.1](./README.md/#v201)
- [v2.0.0](./README.md/#v200)
- [v1.0.0](./README.md/#v100)

## v2.0.2
Allow for entries to have replies added. Replies are displayed below the existing entries when all previous posts are returned.

## v2.0.1
In this version, the form now requires a username to be associated with posts. This allows all previous posts to be returned.

## v2.0.0
Updated the main page to return a form with a text area, for a user enter and submit a posting. Modified the automated testing to use [Selenium](http://www.seleniumhq.org/). Note: Drivers for running the tests are available [here](http://seleniumhq.github.io/selenium/docs/api/javascript/index.html).

## v1.0.0
A basic Hello world running on [Node.js](https://nodejs.org) using the [Express](http://expressjs.com) web application framework to respond to a GET request sent to [http://localhost:3000](http://localhost:3000) with a `200` response code and a text body of `Hello world!`. Unit testing completed using the [Mocha JavaScript](https://mochajs.org) test framework.
