import React from "react";
import Units from "./Units";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Saturday",
    temp: 20,
    time: "00:00"
  };

  return (
    <div className="weather">
      <Units />
      <h1>{weatherData.city}</h1>
      <h2>{weatherData.temp}°C</h2>
      <div className=" current-icon">
        <i className="fas fa-cloud"></i>
      </div>
      <h3>{weatherData.date}</h3>
      <p className="hours-minutes">{weatherData.time}</p>
    </div>
  );
}
