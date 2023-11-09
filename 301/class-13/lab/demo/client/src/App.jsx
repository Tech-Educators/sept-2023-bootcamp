import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Book from "./pages/Book";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    const API = `http://localhost:8080/books`;
    const res = await axios.get(API);
    setBooks(res.data);
  }

  async function deleteBook(id) {
    const API = `http://localhost:8080/books/${id}`;
    await axios.delete(API);
    getBooks();
  }

  return (
    <BrowserRouter>
      <h1>Books Ahoy!</h1>
      <p>Do you even read brah?!</p>
      {/* <Link to="/about">About</Link> */}

      <Routes>
        <Route
          path="/"
          element={
            <Home books={books} setBooks={setBooks} deleteBook={deleteBook} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/books/:id" element={<Book />} />
      </Routes>

      <footer>This is the footer</footer>
    </BrowserRouter>
  );
}

export default App;
