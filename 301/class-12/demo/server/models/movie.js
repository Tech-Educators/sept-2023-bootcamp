const mongoose = require("mongoose");

const { Schema } = mongoose;

const movieSchema = new Schema({
  name: String,
  imgUrl: String,
  director: String,
  year: Number,
  rottenRating: Number,
  summary: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
