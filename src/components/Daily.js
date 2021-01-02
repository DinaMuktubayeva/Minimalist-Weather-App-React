import React, { useState, useEffect } from 'react'
import DayCard from './DayCard'

function Daily({ weather }) {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(weather.daily)

  }, [])



  console.log(weather)
  if (weather.daily !== undefined && weather.daily.size !== 0) {
    return (
      <div className="Daily">
        <h3>Daily</h3>
        <div className="days">
          {weather.daily.map((day) =>
            < DayCard data={day} />
          )}
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default Daily
