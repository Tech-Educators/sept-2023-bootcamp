import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>React Router Dom</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        <p>&copy; Tim the Bin</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
