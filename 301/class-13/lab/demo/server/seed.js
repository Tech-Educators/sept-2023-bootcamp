const mongoose = require("mongoose");
const Book = require("./models/book");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

async function jez() {
  await Book.create([
    {
      title: "Madame Trunchable",
      author: "Ralhaha",
      status: true,
    },
    {
      title: "Dead Poet Society",
      author: "The Genie from Aladdin",
      status: false,
    },
  ]);

  mongoose.disconnect();
}

jez();
