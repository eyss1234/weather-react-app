import React from "react";
import "./weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="city-container">
        <h2>{props.city}</h2>
        <p>
          {props.currentDate} {props.currentTime}
        </p>
      </div>
      <div className="main-temp-container">
        <h2>{props.mainTemp}°C</h2>
      </div>
      <p><a href="https://github.com/eyss1234/weather-react-app">Open-source code</a>, by Emily Sato</p>
    </div>
  );
}
