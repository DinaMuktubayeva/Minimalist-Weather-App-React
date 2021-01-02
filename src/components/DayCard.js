import React, {useState} from 'react'

function DayCard(day) {
  
  function getIcon(descr) {
    if (descr === 'Clear')
      return "fas fa-sun"
    else if (descr === 'Clouds')
      return "fas fa-cloud"
      else if (descr === 'Rain')
      return "fas fa-cloud-showers-heavy"
      else if (descr === 'Snow')
      return "fas fa-snowflake"
  }

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

  return (
    <div className="DayCard">
      <h4>{getDay(day.data.dt)}</h4>
      <i className={getIcon(day.data.weather[0].main)}></i>
      <div className='weather-temp'>
        <span className='temp-day'>{Math.round(day.data.temp.day)}°</span>
        <span className='temp-night'>{Math.round(day.data.temp.night)}°</span>
      </div>
      <div className='weather-descr'>{day.data.weather[0].description}</div>
    </div>
  )
}

export default DayCard
