import React from "react";
import Search from './Search'
import "./weather.css";

export default function Weather(props) {
  return (
    
    <div className="Weather">
      <Search />
      <div className="city-container">
        <h1>{props.city}</h1>
        <ul>
          <li>{props.currentDate} {props.currentTime}</li>
          <li>Mostly Cloudy</li>
        </ul>
      </div>
      <div className="main-temp-container row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          <h2>{props.mainTemp}°C</h2> 
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
