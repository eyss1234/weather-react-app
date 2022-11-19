import React, { useState } from "react";
import './weatherForecast.css'
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    // console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  
  if (loaded) {
    console.log(forecast);
    return(
      <div className="WeatherForecast">
        <div className="row mt-4">
          {forecast.map((dailyForecast, index) => {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    )  
  } else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);  
  } 
}