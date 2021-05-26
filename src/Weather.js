import React from "react";
import "./Weather.css"

export default function Weather () {
    return <div className="Weather">
        
        <form> 
            <div className="row">
                <div className="col-9">
          <input
          type="search"
          placeholder="Enter a City"
          className="form-control"
          />
          </div>
          <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </div>
        </form>

    <h1> New York</h1>
    <ul>
        <li>Tuesday 15:00</li>
        <li>Mostly Cloudy</li>
    </ul>
    <div className="row">
        <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"/>
            31°C
        </div>
        <div className="col-6">
            <ul>
                <li>
                Precipitation: 18%
                </li>
                <li>
                Humidity: 43%
                </li>
                <li>
                Wind: 8 km/h
                </li>
            </ul>
        </div>
    </div>
    </div>
}