// create a constructor function
function Character(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

// add a method to our Characters
Character.prototype.attack = function () {
  console.log(`${this.name} attacks with their ${this.weapon}`);
};

const charactersArray = [];

function checkLocal() {
  // get the characters from local storage and parse it so it's not a string
  const charsFromLS = JSON.parse(localStorage.getItem("characters"));

  // if that exists:
  if (charsFromLS) {
    // reinstantiate my array of objects one by one
    for (let i = 0; i < charsFromLS.length; i++) {
      const newChar = new Character(charsFromLS[i].name, charsFromLS[i].weapon);
      charactersArray.push(newChar);
    }
  } else {
    // if it doesn't exist:
    // create our characters
    const char1 = new Character("Tim the Preposterous", "nunchucks");
    const char2 = new Character("GJ the Wise", "bowstaff");
    const char3 = new Character("Vicky the Great", "Sarcasm");
    const char4 = new Character("Demie the Demi-god", "big ol' gun");

    // add them to our array
    charactersArray.push(char1, char2, char3, char4);

    // put our characters array into local storage
    putIntoLocalStorage();
  }
}

// put that array into localStorage after stringifying it
function putIntoLocalStorage() {
  const charactersStringified = JSON.stringify(charactersArray);
  localStorage.setItem("characters", charactersStringified);
}

checkLocal();
