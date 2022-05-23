import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Montreal" />
        <footer>
          This project is created by{" "}
          <a
            href="https://www.linkedin.com/in/arameh-soltani/"
            target="_blank"
            rel="noreferrer"
          >
            Arameh soltani
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/AramehSL/weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
