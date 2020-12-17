import React, { useEffect, useState } from 'react';
import './App.css';
import Weather from './components/Weather';
import Form from "./components/Form";
import { API_KEY } from './credentials';

const App = () => {

  const [city, setCity] = useState({});
  const [weather, setWeather] = useState({}); // weather forecast details
  const [search, setSearch] = useState(""); // user input
  const [query, setQuery] = useState("London"); // city to request data for

  useEffect(() => {
    getData();
  }, [query]);


  const getData = async () => {

    // Retrieve the geocoordinates
    const responseCoordinates = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`);
    const currentData = await responseCoordinates.json();
    
    setCity(currentData.city);
    
    let lon = currentData.city.coord.lat;
    let lat = currentData.city.coord.lon;

    // Retrieve the weather forecast for 5 days with One-Call API
    const responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={minutely}&appid=${API_KEY}&units=metric`);
    const data = await responseForecast.json();
    console.log(data.hourly);
    setWeather(data);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <Form search={search} getSearch={getSearch} updateSearch={updateSearch} />
      <Weather city={city} weather={weather} />
    </div>
  );
}

export default App;
