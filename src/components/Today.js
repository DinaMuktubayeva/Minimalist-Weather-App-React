import React, { useState, useEffect } from 'react'

function Today({ city, weather, setBackground }) {
    console.log(weather)
    const [icon, setIcon] = useState('')

    useEffect(() => {
        if (weather !== undefined &&
            weather.current !== undefined) {
            switch (weather.current.weather[0].main) {
                case 'Clear':
                    setBackground({
                        background: "lightblue"
                    })
                    setIcon("fas fa-sun")
                    break
                case 'Clouds':
                    setBackground({
                        background: "grey"
                    })
                    setIcon("fas fa-cloud")
                    break
                default:
                    setBackground(setBackground({
                        background: "black"
                    }))
            }
        } else {
            setBackground(setBackground({
                background: "black"
            }))
        }
    }, [weather])

    if (weather !== undefined &&
        weather.current !== undefined) {

        return (
            <div className="Weather">
                <h3>{city.name}, {city.country}</h3>

                <div className="temp">
                    <i className={icon}></i>
                    <span><h1>{Math.round(weather.current.temp)}°C</h1>
                    </span>
                </div>
                <h3 className='weather-descr'>{weather.current.weather[0].description}</h3>

                <div className="details">
                    <span>Feels like {Math.round(weather.current.feels_like)}°</span>
                    <span>Wind {Math.round(weather.current.wind_speed)} km/h</span>
                    <span>Visibility {Math.round(weather.current.visibility) / 1000} km</span>
                    <span>Barometer {Math.round(weather.current.pressure)} mb</span>
                    <span>Humidity {weather.current.humidity}%</span>
                    <span>Dew point {Math.round(weather.current.dew_point)}°</span>
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default Today