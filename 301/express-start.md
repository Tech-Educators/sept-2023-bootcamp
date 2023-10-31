# Here are the steps to creating an Express server

Run the following commands in your terminal, in the directory you want your server to be in:

- `touch server.js` this will create a new file
- `npm init -y` this will create a package.json for your project
- `npm i express cors dotenv` this will install the packages we need to run our server

This is the boilerplate code for the server:

```js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

// add your endpoints here

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
```

Now add your endpoints using `app.get()` and you are away!
