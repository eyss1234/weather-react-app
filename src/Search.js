import React, { useState } from "react";
import axios from "axios";
import "./search.css";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);

  function searchSubmit(e) {
    e.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14f9cf6fd094b0c0a439f2ffc2e74947&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function inputCity(e) {
    setCity(e.target.value);
  }

  function showTemperature(response) {
    console.log(response.data);
    setTemp(
      <ul>
        <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li>Description: {response.data.weather[0].description}</li>
        <li>Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {response.data.wind.speed}km/h</li>
        <li>
          <img
            src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
            alt={response.data.weather[0].description}
          />
        </li>
      </ul>
    );
  }

  return (
    <div className="Search container">
      <div className="city-search">
        <form onSubmit={searchSubmit}>
          <input type="search" onChange={inputCity} />
          <input className="button" type="submit" value="Search" />
        </form>
      </div>
      <div>{temp}</div>
    </div>
  );
}
