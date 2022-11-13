import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
  return (
    <ReactAnimatedWeather 
      icon="CLEAR_DAY"
      color="#bb440d"
      size={70}
      animate={true}
    />

  )
}