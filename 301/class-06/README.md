# Asynchronous Code and Third Party APIs

## Overview

For this class we will explore third party APIs and how to request data from them.

## Class Outline

- Warm-up exercise
- Code review of previous lab assignment
- Third Party APIs, `async` and `await`
- Code Demo
- Lab Preview

## Learning Objectives

### Students will be able to

#### Describe and Define

- APIs
- HTTP API Client
- .env
- Axios
- async and await
- Asynchronous Code
- API keys
- Queries
- WRRC
- Request
- Response
- Understand third-party APIs
- Understand async and await

#### Execute

- Be able to gather information from APIs
- Use HTTP API Client to test routes

## Notes

1. What is an API?
1. What is asynchronous code and how does it relate to async and await?
1. Why do you need an API key?
1. What is an HTTP API Client?
1. What is axios?
1. Making a variable in an .env file: `PORT=3000`

   - Common ways to get that wrong:
     - Spaces around the `=`
     - Adding a semicolon at the end of the line
     - Using something other than UPPERCASE

1. Making an API call:

   ```javascript
   import React from "react";
   import axios from "axios";
   ```

function App(){
// Because it takes an unknown amount of time to get the information, we need to do an async and await in this function:
getPokemon = async () => {
// This will go to the Pokemon API and GET us a bunch of pokemon objects.
// The 'await' says: "Don't run the next line until I get back with the information that you asked for and then put it in a const called 'pokemon'."
const pokemonResponse = await axios.get('https://pokeapi.co/api/v2/pokemon');

       // axios returns a big object. The part of that object that has the pokemon in it is the .data attribute of the object.
       const pokemonArray = pokemonResponse.data;
     }

      return(
        <button onClick={this.getPokemon}>Get Pokemon</button>
      )

}

````

1. Using a try/catch for error handling:

```javascript
getPokemon = async () => {
  try{
    const pokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const pokemonArray = pokemon.data;
  } catch(err) {
    console.error(err);
  }
}
````

- you can wrap a try/catch around any code you want
- it says, "try to run this code - if it doesn't work, then run the code in the catch block"
