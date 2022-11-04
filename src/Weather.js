import React from "react";
import "./weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="container mt-1 row">
        <div className="city-container p-5 col">
          <h2>{props.city}</h2>
          <p>
            {props.currentDate} {props.currentTime}
          </p>
        </div>
        <div className="main-temp-container p-5 col">
          <h2>{props.mainTemp}C</h2>
        </div>
      </div>
    </div>
  );
}
