import React , { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7059cb165caa3316bff682d263a01b1e&units=metric`;
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
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      coordinates: response.data.coord,
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
        <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>
    );
  } else {
    search();
    return "Loading...";
  } 
}
