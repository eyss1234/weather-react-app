import React from "react";

export default function WeatherTemperature(props) {
  return (
    <h2 className="temperature">{Math.round(props.celsius)}
    <span className="unit">°C</span></h2> 
  )
}