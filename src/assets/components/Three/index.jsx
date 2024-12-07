import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function Three() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState("");
  const [weatherAll, setWeatherAll] = useState([]);
  const apiKey = "11fd3717469264084e0ba590185671a4";

  useEffect(() => {
    if (search) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&Threeid=${apiKey}&units=metric`
        )
        .then((response) => {
          setWeather(response.data);
          let copeid = [...weatherAll];
          setWeatherAll([...copeid, response.data]);
        })

        .catch((error) => {
          console.error("Xato:", error);
          alert("Shahar topilmadi. Qayta urinib ko'ring.");
        });
    }
  }, [search]);

  function handleSearch(event) {
    event.preventDefault();
    if (city.length < 2) {
      alert("Shahar nomi juda qisqa yoki malumot toliq emas");
      return;
    }
    setSearch(city);
    setCity("");
  }

  return (
    <div className="container">
      <div className="cards-weather">
        <h1>Ob-havo ma'lumoti</h1>
        <form>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Shahar nomini kiriting"
          />
          <br />
          <button onClick={handleSearch}>Qidirish</button>
        </form>
      </div>

      <div className="weather-cards">
        {weatherAll.map((cityWeather, index) => (
          <div className="weather-card" key={index}>
            <h2>{cityWeather.name}</h2>
            <p>Harorat: {cityWeather.main.temp}°C</p>
            <p>Namlik: {cityWeather.main.humidity}%</p>
            <p>Shamol tezligi: {cityWeather.wind.speed}m/s</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Three;
