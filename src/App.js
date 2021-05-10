import React from "react";
import "./styles.css";
import Search from "./Search";
import Weather from "./Weather";

import Forecast from "./Forecast";
export default function App() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="card background-card">
        <Search />
        <Weather />

        <div className="container-fluid">
          <div className="row">
            <Forecast min={0} max={20} />
            <Forecast min={0} max={20} />
            <Forecast min={0} max={20} />
            <Forecast min={0} max={20} />
          </div>
        </div>
        <small>
          <a
            href="https://github.com/BrisaBohle/Weather_app_plus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          , by Brisa Bøhle
        </small>
      </div>
    </div>
  );
}
