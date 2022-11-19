import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div className="WeatherForecastDay">
      <div className="forecast-day mb-2"><strong>{props.data[0].dt}</strong></div>
      <WeatherIcon code={props.data[0].weather[0].icon} size={40}/>
      <div className="forecast-temperatures">
        <span className="forecast-temperature-max">{props.data[0].temp.max}</span>  
        <span className="forecast-temperature-min">{props.data[0].temp.min}</span> 
      </div>
    </div>
  )
}