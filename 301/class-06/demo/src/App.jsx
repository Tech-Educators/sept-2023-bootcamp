import "./App.css";
import axios from "axios";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");

  function handleChange(event) {
    setSearch(event.target.value);
  }

  async function getLocation(event) {
    event.preventDefault();

    // the API url we are going to make a request to
    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;

    // make the GET request
    const res = await axios.get(API);

    // set location to be our response
    setLocation(res.data[0]);
  }

  return (
    <>
      <h1>APIs</h1>
      <form onSubmit={getLocation}>
        <input onChange={handleChange} placeholder="Location" />
        <button>Get Location</button>
      </form>

      <h2>{location.display_name}</h2>
      {/* a form with an input for the user to search */}
      {/* information about the location saved in state */}
    </>
  );
}

export default App;
