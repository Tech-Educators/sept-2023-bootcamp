// for (initialisation; condition; increment)
// initialisation happens ONCE before the loop starts
// condition is checked before each loop happens (and the loop doesn't if the condition is false)
// increment happens AFTER every loop (so the condition isn't checking the same number every time)

let answer = 7;
let number = prompt("Guess a number between 1-10");
let attempts = 4;

while (attempts > 1) {
  attempts--;
  if (number > answer) {
    alert("Too high!");
    number = prompt("Guess again! You have " + attempts + " left");
  } else if (number < answer) {
    alert("Too low!");
    number = prompt("Guess again! You have " + attempts + " left");
  } else if (parseInt(number) === answer) {
    alert("That's right, lucky number 7!");
    break;
  }
}

if (parseInt(number) !== answer) {
  alert("The answer was 7");
}
