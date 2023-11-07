const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  status: Boolean,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
