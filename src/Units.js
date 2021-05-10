import React from "react";
import "./Units.css";
export default function Units() {
  return (
    <div className="form-check form-switch units">
      <input className="form-check-input" type="checkbox" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        °C | °F
      </label>
    </div>
  );
}
