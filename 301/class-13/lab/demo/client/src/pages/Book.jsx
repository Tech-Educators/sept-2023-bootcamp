import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

export default function Book() {
  const [book, setBook] = useState({});

  const params = useParams();

  useEffect(() => {
    getBook();
  }, []);

  async function getBook() {
    const API = `http://localhost:8080/books?_id=${params.id}`;
    const res = await axios.get(API);
    setBook(res.data[0]);
  }

  return (
    <div>
      <h2>
        {book.title} by {book.author}
      </h2>
      <p>
        {book.status ? "I loved this book" : "I can't wait to read this book"}
      </p>
      {book.title && <Form book={book} setBook={setBook} />}
    </div>
  );
}
