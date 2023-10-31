// import express from our node_modules
const express = require("express");

// import cors from our node_modules - CORS is a middleware, think of it as a bridge between our client and our server
const cors = require("cors");

// import dotenv, then run the config method of our dotenv module so we can have access to our environment variables
require("dotenv").config();

// tell the server which port to run on. We can set this in our .env but we don't have to
const PORT = process.env.PORT || 8080;

// instantiating our instance of express - we are calling it app (app is now a GIANT object with all the HTTP methods)
const app = express();

// ACTIVATE CORS - don't forget to put the () after cors
app.use(cors());

// here is where our custom code will live

// start the server on our PORT, and give it a console log so we can see its working
app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
