import { Link } from "react-router-dom";
import Form from "../components/Form";

export default function Home({ books, setBooks, deleteBook }) {
  return (
    <div>
      {books.map((book) => {
        return (
          <div key={book._id}>
            <Link to={`/books/${book._id}`}>
              <h2>{book.title}</h2>
            </Link>
            <h3>{book.author}</h3>
            <p>Read: {book.status ? "✅" : "😡"}</p>
            <button onClick={() => deleteBook(book._id)}>Delete :\</button>
          </div>
        );
      })}
      <Form books={books} setBooks={setBooks} />
    </div>
  );
}
