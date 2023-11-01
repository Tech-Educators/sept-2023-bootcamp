import "./App.css";
import axios from "axios";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [location, setLocation] = useState({});
  const [search, setSearch] = useState("");
  const [number, setNumber] = useState(10);
  const [weather, setWeather] = useState([]);

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
    getWeather(res.data[0]);
  }

  async function getWeather(tempLocation) {
    const API = `http://localhost:8080/weather?lat=${tempLocation.lat}&lon=${tempLocation.lon}&searchQuery=${search}`;
    const res = await axios.get(API);
    setWeather(res.data);
  }

  function handleNumber(mod) {
    setNumber(number + mod);
  }

  return (
    <>
      <h1>APIs</h1>
      <form onSubmit={getLocation}>
        <input onChange={handleChange} placeholder="Location" />
        <button>Get Location</button>
      </form>

      {location.lat && (
        <div>
          <button onClick={() => handleNumber(-1)}>-</button>
          <span>{number}</span>
          <button onClick={() => handleNumber(1)}>+</button>

          <img
            src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${location.lat},${location.lon}&zoom=${number}&format=png`}
          />
        </div>
      )}

      <h2>{location.display_name}</h2>
      {weather.map((day) => {
        return (
          <p key={day.date}>
            The weather on {day.date} is {day.description}
          </p>
        );
      })}
    </>
  );
}

export default App;
