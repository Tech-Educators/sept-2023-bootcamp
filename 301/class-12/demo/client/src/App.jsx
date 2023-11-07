import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Form from "./components/Form";

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

  async function deleteMovie(id) {
    const check = confirm("You sure about that?");
    if (check) {
      const API = `http://localhost:8080/movies/${id}`;
      await axios.delete(API);
      getMovies();
    } else {
      alert("Phew, that was a close one!");
    }
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
            <button onClick={() => deleteMovie(movie._id)}>Delete Movie</button>
          </div>
        );
      })}
      <Form movies={movies} setMovies={setMovies} />
    </>
  );
}

export default App;
