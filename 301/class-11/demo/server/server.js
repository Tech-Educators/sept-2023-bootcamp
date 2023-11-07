const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = 8080;

const mongoose = require("mongoose");
const Movie = require("./models/movie");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (_, response) => {
  response.json("You are looking at my root route. Roude.");
});

app.get("/movies", async (request, response) => {
  // request.query is an object, empty by default, but has properties if we add them to the url
  // find() accepts an object and filters by any properties it has in it
  const movies = await Movie.find(request.query);
  response.json(movies);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

// http://localhost:8080/movies
// {}

// http://localhost:8080/movies?rottenRating=100
// { rottenRating: "100" }

// http://localhost:8080/movies?rottenRating=100&name="Nacho"
// { rottenRating: "100", name: "Nacho" }
