# Interview Scheduler

Interview Scheduler is a single-page application built with React! It allows users to book and cancel interview appointments, as well as edit the details of an existing appointment. The application communicates with an API server using the axios library, and persists data using a PostgreSQL database. This application also uses the Cypress, Jest, and Storybook testing libraries.

## Setup

Install dependencies with `npm install`.

## Dependencies

Interview Scheduler requires the following dependencies:

- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts

## Dev Dependencies

Interview Scheduler requires the following dev dependencies:

- react-test-renderer
- prop-types
- cypress
- node-sass

## Running the Development Server

Enter the ```npm start``` command in the terminal to run the development server. The server will run on ```localhost:8000```.

## Running the Storybook Visual Testbed

Enter the ```npm run storybook``` command in the terminal to run the Storybook visual testbed. The server will run on ```localhost:9009```.

## Running Jest Test Framework

Enter the ```npm test``` command in the terminal to run the Jest test framework.

## API Server Setup

The API server is a separate project. You can find it here:
[Scheduler API](https://github.com/lighthouse-labs/scheduler-api)

- Fork and clone this API to your local system, and follow the steps in the project's README to set up the database.

- Fork and clone this repository, and follow the steps above to install dependencies and start the development server.

- Once the API server is running, you can use the app by visiting ```localhost:8000``` in your browser.

## Screenshots

[The main page showing booked appointments](https://raw.githubusercontent.com/OfficialBirdDaddy/scheduler/master/docs/Appointments.png)

[The main page showing all empty appointment slots](https://github.com/OfficialBirdDaddy/scheduler/blob/master/docs/Empty.png?raw=true)

[The form for creating a new appointment](https://github.com/OfficialBirdDaddy/scheduler/blob/master/docs/Create.png?raw=true)

## Project Stack

**Front-end:** React, HTML, SASS, Axios, JSX, Axios, JavaScript

**Back-end:** Express, Node.js, PostgreSQL

**Testing:** Jest, Storybook, Cypress



