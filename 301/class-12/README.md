# Creating and Deleting Resources

## Overview

In this class, we will focus on the `C` and the `D` of the `CRUD`:`CREATE` and `DELETE`. We will discuss how to send a POST request and save that information in a MongoDB database and a DELETE request to remove information from the database.

## Class Outline

- Warm-up exercise
- Code review of lab assignment
- Creating a resource
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- POST
- DELETE
- params
- request.body
- middleware

#### Execute

- Be able to send a post request from the front end to a server
- Be able to instantly update the results and have those results persist on reload
- Be able to send a delete request from the front end to the server
- Understand the need for a body parser

## Helpful Resources

- [mongoose queries](https://mongoosejs.com/docs/api.html#model_Model.findOneAndDelete)

## Notes

1. What does the C and D stand for in CRUD?

1. What are three ways to send information from the front-end to the back-end?

1. Of the three ways to send information, which two are send in the URL?

1. How to send information from the front-end to the back-end using Axios:

**QUERY**

```javaScript
const randomString = 'info that I want to send to the server';
const SERVER = 'http://localhost:3001';

axios.get(`${SERVER}`, { params, { data: randomString }})
```

- queries look like this: `http://localhost:3000/?city=seattle`
- they come after the question mark
- they are made up of key/value pairs separated by an equal sign
- you can have multiple queries: `http://localhost:3000/?city=seattle&state=wa`
- sent on the request.query
  - this will be the `request.query.data`

---

**PARAMS**

```javaScript
const id = 12;
const SERVER = 'http://localhost:3001`;

// this will get a single record because we are doing an app.get with an id
axios.get(`${SERVER}/${id}`)

// this will delete a single record because we are doing an app.delete with an id
axios.delete(`${SERVER}/${id}`})
```

- params look like this: `http://localhost:3000/12`
- they come before any queries
- the server defines what the key is for the params like this: `app.get('/someRoute/:id', callBack)`
  - That `:id` can be called anything - it is a variable (ie `app.get('/someRoute/:banana', callback)`)
- The value of the params is what comes in in the URL in that position. So, in this case, the key is `id` and the value is `12`.
- sent on the request.params
  - this will be `request.params.id`

---

**BODY**

```javaScript
const newRecord = {
  name: 'bob',
  age: 104
}
const SERVER = 'http://localhost:3001';

// this will create a new record because that is what POST does
axios.post(`${SERVER}`, { data: newRecord });
```

- sent on the request.body
- will need to parse the body on server in order to be able to read this information. You do this by adding this line of code to your server: `app.use(express.json());`
  - Without this line of code, the request.body will come in as undefined

1. Server Routes

**CREATE**

```javaScript
app.post('/someRoute', callback);

callback(request, response) {
  // gets information from the BODY of the request object
  const newRecord = request.body.newRecord

  // create a record and save
  const bob = new Model(name: request.body.newRecord.name, age: request.body.newRecord.age);
  bob.save()
}
```

**DELETE**

```javaScript
app.delete('/someRoute/:id', callback);

callback(request, response) {
  // get the id of the record to delete from the params
  const id = request.params.id;

  // find that record and delete
  Model.findOneAndDelete(id);
}
```

- if we need to find a user first and then delete a book ...

  ```javaScript
  app.delete('/someRoute/:index', callback);

  callback(request, response) {
    // get the index of the book
    const index = request.params.index;
    // get the email from the query (need to make sure we send it in the front-end)
    const email = request.query.email;

    // find the user by email
    Model.findOne({ email }, (err, person) => {
      if(err) console.error(err);
      // now that we found the user, delete the book using the index
      const newBookArray = person.books.splice(index, 1);
      // assign the new book Array to the user
      person.books = newBookArray;
      // save it
      person.save();
    })
  }
  ```
