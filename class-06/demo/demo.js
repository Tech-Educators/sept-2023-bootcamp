console.log("Hello world!");
console.log("SLOW DOWN TIM");
// this is a comment, anything I write here won't effect the code

// variables
let myName = "Tim";
let myAge = 900;

// data types
let string = "Anything within quotes";
let number = 10;
let boolean = true; // or false

// prompt
// here we ask the user a question
let cheese = prompt("What is your favourite cheese?");
// here we tell the user their answer
console.log(cheese);

// if
let time = prompt("What is the time? (hh 24 hour format please)");
// < less than
// > more than
// we want to say good morning to the user if it is the morning
if (time < 12) {
  console.log("Good morning");
} else if (time < 18) {
  console.log("Good afternoon");
} else if (time < 25) {
  console.log("Good evening");
} else {
  console.log("You're mad!");
}
