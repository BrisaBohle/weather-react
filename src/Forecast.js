import React from "react";
import "./Forecast.css";
export default function Forecast(props) {
  return (
    <div className="col-3 weather-forecast-date">
      <div>WED</div>
      <div>
        <div className="week-icon">
          <i className="fas fa-cloud"></i>
        </div>
        <span>
          {props.min}°C | {props.max}°C
        </span>
      </div>
    </div>
  );
}
