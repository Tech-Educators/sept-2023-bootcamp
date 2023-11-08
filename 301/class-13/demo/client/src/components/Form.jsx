import { useState } from "react";
import axios from "axios";

export default function Form({ movies, setMovies, movie, setMovie }) {
  const [formData, setFormData] = useState(
    movie ?? {
      name: "",
      imgUrl: "",
      director: "",
      year: "",
      rottenRating: "",
    }
  );

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function addMovie(event) {
    event.preventDefault();
    const API = "http://localhost:8080/movies";
    const res = await axios.post(API, formData);
    setMovies([...movies, res.data]);
  }

  async function updateMovie(event) {
    event.preventDefault();
    const API = `http://localhost:8080/movies/${movie._id}`;
    await axios.put(API, formData);
    setMovie(formData);
  }

  return (
    <form onSubmit={movie?.name ? updateMovie : addMovie}>
      <input
        name="name"
        placeholder="name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        name="imgUrl"
        placeholder="imgUrl"
        onChange={handleChange}
        value={formData.imgUrl}
      />
      <input
        name="director"
        placeholder="director"
        onChange={handleChange}
        value={formData.director}
      />
      <input
        name="year"
        placeholder="year"
        onChange={handleChange}
        value={formData.year}
      />
      <input
        name="rottenRating"
        placeholder="rottenRating"
        onChange={handleChange}
        value={formData.rottenRating}
      />
      <button>Add Movie</button>
    </form>
  );
}
