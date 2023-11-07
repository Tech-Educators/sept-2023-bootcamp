const mongoose = require("mongoose");
require("dotenv").config();
const Movie = require("./models/movie");

// connect to our database
mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Movie.create([
    {
      name: "The Godfather",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      director: "Francis Ford Coppola",
      year: 1972,
      rottenRating: 98,
      summary:
        "The Godfather is a classic crime drama film that tells the story of the Corleone family, headed by patriarch Vito Corleone. It explores the dynamics of power, loyalty, and crime in the world of organized crime.",
    },
    {
      name: "Paddington 2",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMmYwNWZlNzEtNjE4Zi00NzQ4LWI2YmUtOWZhNzZhZDYyNmVmXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_QL75_UY281_CR0,0,190,281_.jpg",
      director: "Paul King",
      year: 2017,
      rottenRating: 100,
      summary:
        "Paddington, a friendly bear, is on a mission to buy a special book for his aunt's 100th birthday. When the book is stolen, Paddington and the Browns embark on an adventure to unmask the thief and recover the book.",
    },
    {
      name: "Nacho Libre",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BN2ZkNDgxMjMtZmRiYS00MzFkLTk5ZjgtZDJkZWMzYmUxYjg4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
      director: "Jared Hess",
      year: 2006,
      rottenRating: 100,
      summary:
        "Nacho Libre is a comedy film starring Jack Black as Ignacio, a cook at a monastery who secretly becomes a luchador (Mexican wrestler) to win money for the orphanage. The film combines humor and wrestling action.",
    },
    {
      name: "Galdiator",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      director: "Ridley Scott",
      year: 2000,
      rottenRating: 87,
      summary: "Man is fight people because man angry.",
    },
    {
      name: "Galdiator",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      director: "Ridley Scott",
      year: 2000,
      rottenRating: 87,
      summary: "Man is fight people because man angry.",
    },
    {
      name: "Lolita: Battle Angel",
      imgUrl: "Angryrobot.gif",
      director: "Tim Smith",
      year: 2025,
      rottenRating: 2000,
      summary: "Giant eyes robot",
    },
    {
      name: "The Mask",
      imgUrl:
        "https://m.media-amazon.com/images/M/MV5BOWExYjI5MzktNTRhNi00Nzg2LThkZmQtYWVkYjRlYWI2MDQ4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
      director: "Ridley Scott",
      year: 1956,
      rottenRating: 99,
    },
    {
      name: "okjhjug",
      imgUrl: "iojjuyg",
      director: "ljkuyg",
      year: 2000,
      rottenRating: 1010,
    },
    {
      name: "okjhjug",
      imgUrl: "iojjuyg",
      director: "ljkuyg",
      year: 2000,
      rottenRating: 1010,
    },
    {
      name: "okjhjug",
      imgUrl: "iojjuyg",
      director: "ljkuyg",
      year: 2000,
      rottenRating: 1010,
    },
    {
      name: "okjhjug",
      imgUrl: "iojjuyg",
      director: "ljkuyg",
      year: 2000,
      rottenRating: 1010,
    },
    {
      name: "okjhjug",
      imgUrl: "iojjuyg",
      director: "ljkuyg",
      year: 2000,
      rottenRating: 1010,
    },
    {
      name: "okjhjug",
      imgUrl: "iojjuyg",
      director: "ljkuyg",
      year: 2000,
      rottenRating: 1010,
    },
  ]);

  console.log("Movie created");
  mongoose.disconnect();
}

seed();
