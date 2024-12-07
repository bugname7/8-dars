import React, { useState } from "react";
import "./index.css";
import axios from "axios";

function App() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const api_key = "4ba1bb5e";
  function validate() {
    if (name.length < 1) {
      alert("kino nomi juda qisqa");
      return false;
    }
    return true;
  }
  const handleSearch = (e) => {
    e.preventDefault();
    const isvalid = validate();
    if (!isvalid) {
      return;
    }
    if (name.trim() === "") return;
    setLoading(true);
    axios
      .get(`http://www.omdbapi.com/?apikey=${api_key}&s=${name}`)
      .then((response) => {
        if (response.status === 200) {
          setFilms(response.data.Search || []);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="app">
      <div className="container">
        <h2>Galivud Kinolarini Qidirish</h2>
        <form className="search-form">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Kino nomini kiriting"
          />
          <br />
          <button onClick={handleSearch} className="search-button">
            Qidirish
          </button>
        </form>
      </div>

      <div className="container">
        {loading && <p>ozgina kutib turing...</p>}
        {films.length > 0 ? (
          <div className="films-list">
            {films.map((film, index) => (
              <div key={index} className="film-card">
                <h3>title:{film.Title}</h3>
                <h4>year:{film.Year}</h4>
                <img
                  width="200px"
                  src={film.Poster !== "N/A" ? film.Poster : "/placeholder.jpg"}
                  alt={film.Title}
                  className="film-poster"
                />
              </div>
            ))}
          </div>
        ) : (
          !loading && <p>boshqa kino qidirib koring</p>
        )}
      </div>
    </div>
  );
}

export default App;
