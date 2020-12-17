# Important

The "credentials.js" file isn't present here. It should be created in "src/" and it should contain the following line: 
`export const API_KEY = // Your API Key //;`

I am still working on error handling, adding the forecast data and styling.

## API

The API key can be obtained here https://openweathermap.org/api

This project fetches data from the "5 Day / 3 Hour Forecast" and "One-Call" APIs available for free. These two calls could be replaced by one call to the "Daily Forecast 16 days" API which is available only to paid accounts.

## App Features

This webpage accepts a city name from user and shows various weather parameters for today, like temperature, UVI, humidity, etc without reloading. 

React Hooks are used to refresh the page content every time user submits a city name.

## Running the project

After you download and unzip the project,  run `npm test` to run the app in the watch mode, or run `npm start` to run the app in the development mode. It should automatically open [http://localhost:3000] in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
