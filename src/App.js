import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return <div className="App">
    <div className="container">
      <Weather defaultCity="New York" />
      <footer>
        This{" "}
        <a href="https://github.com/alkellett87/react-weather-application"
           target="_blank" rel="noopener noreferrer">      
        open-sourced
        </a>
       {" "} weather application was coded by Ann Louise Kellett.
      </footer>
      </div>
    </div>
  ;
}