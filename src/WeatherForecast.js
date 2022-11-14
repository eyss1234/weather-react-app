import React from "react";
import WeatherIcon from "./WeatherIcon";
import './weatherForecast.css'

export default function WeatherForecast() {
  return(
    <div className="WeatherForecast">
      <div className="row mt-4">
        <div className="col">
          <div className="forecast-day"><strong>TUE</strong></div>
          <WeatherIcon code="01d" />
          <div className="forecast-temperatures">
            <span className="forecast-temperature-min">5</span>
            <span className="forecast-temperature-max">10</span>
          </div>
        </div>
      </div>
    </div>
  )
}