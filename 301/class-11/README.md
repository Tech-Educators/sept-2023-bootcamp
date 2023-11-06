# MongoDB, Mongoose and Data Modeling

## Overview

This is the beginning of our new project, a mobile-only book collection. You will be gradually working towards a full-scale application, complete with an express server, persistence in a MongoDB database, authentication, and the ability to view, add, update and delete books from your React front end.

To start, we will introduce Mongodb and Mongoose. We will create data models and hard code some data to store in our database so that our front end can retrieve that data. We will introduce `CRUD` and focus on the `R`:`READ`.

## Class Outline

- Warm-up exercise
- Code review of lab assignment
- MongoDB, Mongoose, Data Modeling
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- CRUD
- MongoDB
- Mongoose
- ORM
- GET

#### Execute

- Be able to create a data model or schema
- Be able to set up a MongoDB database using Mongoose
- Be able to retrieve all of the entries from a MongoDB database using Mongoose

## Notes

1. What does the R stand for in CRUD?

1. What is an ORM?

1. How are MongoDB and Mongoose related?

1. Why do we need to use Mongoose at all?

1. Where does MongoDB live?

1. Mongoose:

- step 1: Bring in Mongoose

  ```javaScript
  const mongoose = require('mongoose');
  // making a database called cats-database
  mongoose.connect('mongodb://localhost:27017/cats-database', {useNewUrlParser: true, useUnifiedTopology: true});

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Mongoose is connected')
  });
  ```

- step 2: Make a schema

```javaScript
const catSchema = new mongoose.Schema({
  name: {type: String}
});

```

- step 3: Make a model from the schema

```javaScript
const CatModel = mongoose.model('cat-collection', catSchema);
```

- step 4: Create and save a record

```javaScript
const fluffy = new CatModel({name:'fluffy'});
fluffy.save();
```

- step 5: Gets all the records from the database

```javaScript
  CatModel.find((err, cat) => {
    if(err) return console.error(err);
    console.log({cat})
  });
```

- Gets the record where the name is 'fluffy'

```javaScript
  CatModel.find({name:'fluffy'}, (err, cat) => {
    if(err) return console.error(err);
    console.log({cat})
  });
```

1. What resources can I use to help me with my lab and to learn more?
   [mongoose](https://mongoosejs.com/docs/)
