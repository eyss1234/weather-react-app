import React from "react";
import WeatherIcon from "./WeatherIcon";
import './weatherForecast.css'
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5f472b7acba333cd8a035ea85a0d4d4c`;

  axios.get(apiUrl).then(handleResponse);

  return(
    <div className="WeatherForecast">
      <div className="row mt-4">
        <div className="col">
          <div className="forecast-day mb-2"><strong>TUE</strong></div>
          <WeatherIcon code="01d" size={40}/>
          <div className="forecast-temperatures">
            <span className="forecast-temperature-max">10</span>  
            <span className="forecast-temperature-min">5</span> 
          </div>
        </div>
      </div>
    </div>
  )
}