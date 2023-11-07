import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

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

  return (
    <>
      <h1>Books Ahoy!</h1>
      <p>Do you even read brah?!</p>
      {books.map((book) => {
        return (
          <div key={book._id}>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p>Read: {book.status ? "✅" : "😡"}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
