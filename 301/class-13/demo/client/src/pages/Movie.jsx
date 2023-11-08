import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

export default function Movie() {
  const [movie, setMovie] = useState({});

  const params = useParams();

  useEffect(() => {
    getMovie();
  }, []);

  async function getMovie() {
    const API = `http://localhost:8080/movies?_id=${params.id}`;
    const res = await axios.get(API);
    setMovie(res.data[0]);
  }

  return (
    <div>
      <h2>{movie.name}</h2>
      <img src={movie.imgUrl} />
      <p>{movie.summary}</p>
      <p>Director: {movie.director}</p>
      {movie.name && <Form movie={movie} setMovie={setMovie} />}
    </div>
  );
}
