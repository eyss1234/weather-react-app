import React , { useState } from "react";
import Search from './Search'
import FormattedDate from './formattedDate'
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false })

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
        
        <div className="city-container">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="main-temp-container row">
          <div className="col-6">
            <div className="d-flex">
              <img
                className="weather-img"
                src={weatherData.iconUrl}
                alt={weatherData.description}
              />
              <h2 className="temperature">{Math.round(weatherData.temperature)}
              <span className="unit">°C</span></h2> 
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14f9cf6fd094b0c0a439f2ffc2e74947&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading...";
  } 
}
