/*
 SETTING LOCAL STORAGE
*/
// creating our JS object
const tim = {
  name: "Tim",
  age: 28,
  height: "6ft 4in",
  hair: false,
  children: ["Ezra", "Caleb"],
};
// we need to turn our object into JSON using the stringify method
const timStringified = JSON.stringify(tim);

// localStorage only accepts strings (or strinigied objects)
localStorage.setItem("me", timStringified);

/*
  GETTING LOCAL STORAGE
*/
// get our object back from localStorage
const timFromLocal = localStorage.getItem("me");

// we turn our stringified object BACK into an object using the parse method
const timParsed = JSON.parse(timFromLocal);

console.log(timParsed);
