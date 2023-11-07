import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const API = `http://localhost:8080/movies`;
    const res = await axios.get(API);
    setMovies(res.data);
  }

  return (
    <>
      <h1>Samovies</h1>
      <p>The ultimate movie Database</p>
      {movies.map((movie) => {
        return (
          <div key={movie._id}>
            <h2>{movie.name}</h2>
            <img src={movie.imgUrl} />
          </div>
        );
      })}
    </>
  );
}

export default App;
