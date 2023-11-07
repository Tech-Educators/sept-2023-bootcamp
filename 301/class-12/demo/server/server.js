const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors()); // let me talk across servers
app.use(express.json()); // let me have access to the request.body
const PORT = 8080;

const mongoose = require("mongoose");
const Movie = require("./models/movie");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (_, response) => {
  response.json("You are looking at my root route. Roude.");
});

// request.query is an object, empty by default, but has properties if we add them to the url
// find() accepts an object and filters by any properties it has in it
app.get("/movies", async (request, response) => {
  const movies = await Movie.find(request.query);
  response.json(movies);
});

app.post("/movies", async (request, response) => {
  const newMovie = await Movie.create(request.body);
  response.json(newMovie);
});

app.delete("/movies/:id", async (request, response) => {
  const deletedMovie = await Movie.findByIdAndDelete(request.params.id);
  response.json(deletedMovie);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

// http://localhost:8080/movies
// {}

// http://localhost:8080/movies?rottenRating=100
// { rottenRating: "100" }

// http://localhost:8080/movies?rottenRating=100&name="Nacho"
// { rottenRating: "100", name: "Nacho" }

// params
// /movies/:rottenRating
// http://localhost:8080/movies/100

// query
// /movies
// http://localhost:8080/movies?rottenRating=100
