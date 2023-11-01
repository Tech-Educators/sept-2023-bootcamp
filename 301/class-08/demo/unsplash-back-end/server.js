const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
const axios = require("axios");

app.get("/", (request, response) => {
  response.json("You are looking at my root route... how roude! (unsplosh)");
});

// http://localhost:8080/photos?search=sunset
// request.query.search === sunset
app.get("/photos", async (request, response) => {
  const search = request.query.search;
  const API = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&query=${search}`;

  const res = await axios.get(API);

  const wrangledData = res.data.results.map((image) => {
    return {
      img_url: image.urls.regular,
      photographer: image.user.name,
    };
  });

  response.json(wrangledData);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
