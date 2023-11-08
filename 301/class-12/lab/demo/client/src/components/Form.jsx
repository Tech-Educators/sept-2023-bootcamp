import axios from "axios";
import { useState } from "react";

export default function Form({ books, setBooks }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: false,
  });

  function handleChange(event) {
    if (event.target.type === "checkbox") {
      setFormData({ ...formData, [event.target.name]: event.target.checked });
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const API = "http://localhost:8080/books";
    const res = await axios.post(API, formData);
    setBooks([...books, res.data]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="title" onChange={handleChange} />
      <input name="author" placeholder="author" onChange={handleChange} />
      <input name="status" type="checkbox" onChange={handleChange} />
      <button>Add Book</button>
    </form>
  );
}
