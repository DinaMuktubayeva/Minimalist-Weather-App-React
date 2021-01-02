import React, { useState, useEffect } from 'react';

function Weather({ city, weather }) {
  const [data, setData] = useState({});
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    setData(weather);
    if (weather !== undefined && weather.hourly !== undefined)
      setHourlyData(weather.hourly.filter((hour, i) => i % 5 === 0));
  }, [weather]);

  const updateData = param => e => {
    e.preventDefault();

    data.daily.forEach(day => {
      if (day.dt === param.dt) {
        setData(day);
        return;
      }
    });
  }

  const forecastData = () => {
    if (weather === undefined || city === undefined) {
      return (<div></div>);
    } else {
      return (
        <div className="weather">
          <div>
            <h2>{data.daily ? toDate(data.daily.dt) : ""}</h2>
            <h2>{data.daily ? data.daily.temp.day : ""}°C</h2>
            {/* <p>Feels like: {weather.current.feels_like}°C</p>
  <p>Max temperature: {weatherweather]temp_max}°C</p>
  <p>Min temperature:weather]{weather.temp_min}°C</p> */}
          </div>
        </div>);
    }
  }

  // let dateArray = [];
  // let maxTempArray = [];
  // let minTempArray = [];

  // if (forecast.length !== 0) {
  //   weather]onsole.log(forecast);
  //   for (let iweather]= 0; i < 40; i += 8) {
  //     console.log(forecast);
  //     dateArray.weather]ush(forecast[i].dt);
  //     maxTempArray.weather]ush(forecast[i].main.temp_max);
  //     minTempArray.pusweather](forecast[i].main.temp_min);
  //  weather]}
  // }

  function toDate(unixTimestamp) {
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString();
    return dateObject.toTimeString("en-US", { timeZoneName: "short" }); // 12/9/2019, 10:30:15 AM CST
  }

  function getDay(unixTimestamp) {
    var dateObject = new Date(unixTimestamp * 1000);
    return dateObject.toLocaleString("en-US", { weekday: "long" });
  }

  function getTime(unixTimestamp) {
    var dateObject = new Date(unixTimestamp * 1000);
    return dateObject.toLocaleString("en-US", { timeZoneName: "short" }).substring(12, 22); // 10 AM;
  }

  if (data !== undefined &&
    data.current !== undefined &&
    data.daily !== undefined) {
    return (
      <div className="weather">
        <table>
          <tr>
            <td className="weather-day">{getDay(weather.current.dt)}</td>
            <td className="weather-location">{city.name}, {city.country}</td>
          </tr>
          <tr>
            <td>{getTime(weather.current.dt)}</td>
          </tr>
          <tr>
            <td><h1>{Math.round(weather.current.temp)}°C</h1></td>
          </tr>
          <tr>
            <td className="weather-description">Feels like {Math.round(weather.current.feels_like)}°C</td>
          </tr>
          <tr>
            <td className="weather-description">{weather.current.weather[0].description}</td>
          </tr>
        </table>

        <table className="weather-table2">
          <tr>
            <td>Morning</td>
            <td className="weather-data">{Math.round(weather.daily[0].temp.morn)}°C</td>
          </tr>
          <tr>
            <td>Day</td>
            <td className="weather-data">{Math.round(weather.daily[0].temp.day)}°C</td>
          </tr>
          <tr>
            <td>Evening</td>
            <td className="weather-data">{Math.round(weather.daily[0].temp.eve)}°C</td>
          </tr>
          <tr>
            <td>Night</td>
            <td className="weather-data">{Math.round(weather.daily[0].temp.night)}°C</td>
          </tr>
        </table>

        <table className="weather-table1">
          <tr>
            <td className="weather-label">UVI</td>
            <td className="weather-data">{weather.current.uvi}</td>
          </tr>
          <tr>
            <td className="weather-label">Humidity</td>
            <td className="weather-data">{weather.current.humidity}</td>
          </tr>
          <tr>
            <td className="weather-label">Pressure</td>
            <td className="weather-data">{weather.current.pressure}</td>
          </tr>
        </table>


      </div >
    );
  } else {
    return null;
  }
}

export default Weather;