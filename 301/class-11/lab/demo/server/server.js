const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Book = require("./models/book");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = 8080;
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (_, response) => response.json("Root route. Gouda job."));

app.get("/books", async (request, response) => {
  const books = await Book.find(request.query);
  response.json(books);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
