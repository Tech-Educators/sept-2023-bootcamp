import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Movie from "./pages/Movie";

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
      alert("Bye bye bye!");
    } else {
      alert("Phew, that was a close one!");
    }
  }

  return (
    <BrowserRouter>
      <header>
        <h1>Samovies</h1>
        <p>The ultimate movie Database</p>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              setMovies={setMovies}
              deleteMovie={deleteMovie}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>

      <footer>
        <p>Samovies is a trading name of Samoives &copy;</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
