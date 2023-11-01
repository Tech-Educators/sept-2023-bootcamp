import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [imgs, setImgs] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();
    const search = event.target.search.value;
    const API = `https://unsplosh-back-end.onrender.com/photos?search=${search}`;
    const res = await axios.get(API);
    console.log(res.data);
    setImgs(res.data);
  }

  return (
    <>
      <h1>OHHHH CANAAAADIAAAA</h1>
      <form onSubmit={handleSearch}>
        <input name="search" />
        <button>Search!</button>
      </form>
      {imgs.map((img) => {
        return (
          <div key={img.img_url}>
            <img src={img.img_url} />
            <p>Photo taken by {img.photographer}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
