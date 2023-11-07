const mongoose = require("mongoose");
require("dotenv").config();
const Movie = require("./models/movie");

// connect to our database
mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Movie.create([
    {
      name: "Paddington 2",
      year: 2017,
      director: "Paul King",
      summary:
        "Paddington, a friendly bear, is on a mission to buy a special book for his aunt's 100th birthday. When the book is stolen, Paddington and the Browns embark on an adventure to unmask the thief and recover the book.",
      rottenRating: 100,
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMmYwNWZlNzEtNjE4Zi00NzQ4LWI2YmUtOWZhNzZhZDYyNmVmXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_QL75_UY281_CR0,0,190,281_.jpg",
    },
    {
      name: "The Godfather",
      year: 1972,
      director: "Francis Ford Coppola",
      summary:
        "The Godfather is a classic crime drama film that tells the story of the Corleone family, headed by patriarch Vito Corleone. It explores the dynamics of power, loyalty, and crime in the world of organized crime.",
      rottenRating: 98,
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      name: "Nacho Libre",
      year: 2006,
      director: "Jared Hess",
      summary:
        "Nacho Libre is a comedy film starring Jack Black as Ignacio, a cook at a monastery who secretly becomes a luchador (Mexican wrestler) to win money for the orphanage. The film combines humor and wrestling action.",
      rottenRating: 40,
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BN2ZkNDgxMjMtZmRiYS00MzFkLTk5ZjgtZDJkZWMzYmUxYjg4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
    },
  ]);

  console.log("Movie created");
  mongoose.disconnect();
}

seed();
