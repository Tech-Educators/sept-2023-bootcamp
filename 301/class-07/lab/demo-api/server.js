const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
const data = require("./data/weather.json");

app.get("/", (_, response) => response.json("Root route."));

// create an API endpoint of `/weather` that processes a `GET` request that contains `lat`, `lon` and `searchQuery` information.
// localhost:8080/weather?lat=48.8588897&lon=2.3200410217200766&searchQuery=Paris
app.get("/weather", (request, response) => {
  const lat = request.query.lat;
  const lon = request.query.lon;
  const searchQuery = request.query.searchQuery;

  const filteredCity = data.find((city) => {
    return (
      city.city_name === searchQuery //&& city.lat === lat && city.lon === lon
    );
  });

  const wrangledData = filteredCity.data.map((day) => {
    return {
      description: day.weather.description,
      date: day.datetime,
    };
  });

  response.json(wrangledData);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

// request.query = {
//   lat: 10,
//   lon: 12,
//   searchQuery: "Paris",
// };
