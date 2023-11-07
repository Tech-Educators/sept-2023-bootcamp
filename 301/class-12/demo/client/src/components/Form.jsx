import { useState } from "react";
import axios from "axios";

export default function Form({ movies, setMovies }) {
  const [formData, setFormData] = useState({
    name: "",
    imgUrl: "",
    director: "",
    year: "",
    rottenRating: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function submitForm(event) {
    event.preventDefault();
    const API = "http://localhost:8080/movies";
    const res = await axios.post(API, formData);
    setMovies([...movies, res.data]);
  }

  return (
    <form onSubmit={submitForm}>
      <input name="name" placeholder="name" onChange={handleChange} />
      <input name="imgUrl" placeholder="imgUrl" onChange={handleChange} />
      <input name="director" placeholder="director" onChange={handleChange} />
      <input name="year" placeholder="year" onChange={handleChange} />
      <input
        name="rottenRating"
        placeholder="rottenRating"
        onChange={handleChange}
      />
      <button>Add Movie</button>
    </form>
  );
}
