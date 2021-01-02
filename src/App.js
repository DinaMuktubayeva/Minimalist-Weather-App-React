import React, { useEffect, useState } from 'react'
import './App.scss'
import Today from './components/Today'
import Daily from './components/Daily'
import Weather from './components/Weather'
import Form from "./components/Form"
import { API_KEY } from './credentials'

const App = () => {

  const [city, setCity] = useState({})
  const [weather, setWeather] = useState({}) // weather forecast details
  const [search, setSearch] = useState("") // user input
  const [query, setQuery] = useState("London") // city to request data for
  const [background, setBackground] = useState({})

  useEffect(() => {
    getData()
  }, [query])


  const getData = async () => {

    // Retrieve the geocoordinates
    const responseCoordinates = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_KEY}&units=metric`)
    const currentData = await responseCoordinates.json()

    setCity(currentData.city)

    let lon = currentData.city.coord.lat
    let lat = currentData.city.coord.lon

    // Retrieve the weather forecast for 5 days with One-Call API
    const responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={minutely}&appid=${API_KEY}&units=metric`)
    const data = await responseForecast.json()

    setWeather(data)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className="App" style={background}>
      <Form search={search} getSearch={getSearch} updateSearch={updateSearch} />
      <Today city={city} weather={weather} setBackground={setBackground} />
      <Daily weather={weather} />
      {/* <Weather city={city} weather={weather} /> */}
    </div>
  )
}

export default App
