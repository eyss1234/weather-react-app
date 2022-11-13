import React from "react";
import FormattedDate from './FormattedDate'

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo"> 
      <div className="city-container my-3">
        <h1>{props.data.city}</h1>
        <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="main-temp-container row">
        <div className="col-6">
          <div className="d-flex">
            <img
            className="weather-img"
            src={props.data.iconUrl}
            alt={props.data.description}
            />
            <h2 className="temperature">{Math.round(props.data.temperature)}
            <span className="unit">°C</span></h2> 
          </div>
        </div>
        <div className="col-6">
        <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
        </ul>
        </div>
    </div>
  </div>
  )
}