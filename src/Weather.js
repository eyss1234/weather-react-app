import React , { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14f9cf6fd094b0c0a439f2ffc2e74947&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }


  function handleResponse(response){
    // console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="city-search">
          <form className="d-flex justify-content-between" onSubmit={handleSubmit}>
            <input className="input-box ps-3 pe-2" type="search" onChange={handleCityChange} autoFocus="on"/>
            <input className="button px-4" type="submit" value="Search" />
          </form>
        </div>
        <WeatherInfo data={weatherData}/>
      </div>
    );
  } else {
    search();
    return "Loading...";
  } 
}
