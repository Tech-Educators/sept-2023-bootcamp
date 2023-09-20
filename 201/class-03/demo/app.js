console.log("hello world");

let userPoints = 0;

alert("Welcome to my guessing game!");

let user = prompt("What is your name?");

// making sure they didn't press cancel (null) or leave the box empty ("")
while (!user) {
  user = prompt("You need to actually tell me.");
}

if (user !== "Liam") {
  alert(
    "Urgh, you could have been called Liam! Instead, you have a silly name like " +
      user
  );
}

alert("Hello " + user + ". Would you like to play a game?");

// a question with multiple correct answers
let favFoods = ["pizza", "pasta", "garlic bread"];

let foodAns = prompt("What is one of Tim's favourite foods?").toLowerCase();

// USE ONLY ONE OF THE FOLLOWING

// using a loop to check if the answer was in the array
for (let i = 0; i < favFoods.length; i++) {
  // here we check if
  if (foodAns === favFoods[i]) {
    alert("yeah nice");
    userPoints++;
  }
}
// using indexOf to check if the answer is in the arry
if (favFoods.indexOf(foodAns) >= 0) {
  alert("You got it right!");
  userPoints++;
}

// how would the logic look so it checks if foodAns is in the favFoods array
alert("You got " + userPoints + "/1 questions correct");
