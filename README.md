# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start website

In the project directory, you should run:

### `npm install`

It will install the dependencies in the app.\

### `Create '.env.local' file in the root project's folder`

'.env.local' file is created to secure credentials and private information which should not be published.\
The properties in the file are 'REACT_APP_REST_API_URL', 'REACT_APP_USERNAME', 'REACT_APP_PASSWORD'.\
The file must contains all of them. See the example below: \

REACT_APP_REST_API_URL = [URL]
REACT_APP_USERNAME = [USERNAME]
REACT_APP_PASSWORD = [PASSWORD]

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

