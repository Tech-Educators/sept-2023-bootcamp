import { Link } from "react-router-dom";
import Form from "../components/Form";

export default function Home({ movies, setMovies, deleteMovie }) {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie._id}>
            <Link to={`/movie/${movie._id}`}>
              <h2>{movie.name}</h2>
              <img src={movie.imgUrl} />
            </Link>
            <button onClick={() => deleteMovie(movie._id)}>Delete Movie</button>
          </div>
        );
      })}
      <Form movies={movies} setMovies={setMovies} />
    </div>
  );
}
