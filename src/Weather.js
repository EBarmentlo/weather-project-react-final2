import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [display, setDisplay] = useState(false);
  let [temp, setTemp] = useState({});

  function showWeather(response) {
    setDisplay(true);
    setTemp({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      windSpeed: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "337c2cd71ceaf873b598596eeb4eda3a";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for a city"
        onChange={updateCity}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (display) {
    return (
      <div className="Search">
        {form}
        <h1> The weather for {city} is: </h1>
        <ul>
          <li>Temperature: {Math.round(temp.temperature)}°C</li>
          <li>Humidity: {Math.round(temp.humidity)}%</li>
          <li>Description: {temp.description}</li>
          <li>Wind speed: {Math.round(temp.windSpeed)} km/h</li>
          <li>
            <img src={temp.icon} alt={temp.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
