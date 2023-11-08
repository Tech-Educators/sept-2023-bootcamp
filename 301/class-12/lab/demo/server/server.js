const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Book = require("./models/book");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (_, response) => response.json("Root route. Gouda job."));

app.get("/books", async (request, response) => {
  const books = await Book.find(request.query);
  response.json(books);
});

app.post("/books", async (request, response) => {
  const newBook = await Book.create(request.body);
  response.json(newBook);
});

app.delete("/books/:id", async (request, response) => {
  const deletedBook = await Book.findByIdAndDelete(request.params.id);
  response.json(deletedBook);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
