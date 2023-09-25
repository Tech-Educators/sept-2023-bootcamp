// what is a function?
// a repeatable block of code

//function declaration
function sayHello() {
  console.log("Hello world");
}
// invoke (or call) a function
sayHello();

// when we "declare" a function we can have parameters that give names to the functions inputs
function customGreeting(user) {
  console.log("Hello " + user);
}

// "invoke" a function with a parameter by passing in an argument
customGreeting("Cailum");

// if we want to pass multiple parameters, we separate them witha  comma
function doMaths(num1, num2) {
  console.log(num1 + num2);
}
// invoking this function is the same, but with multiple comma separated aruments
doMaths(10, 5);

// our function can return a value
function getFullName(first, last) {
  return first + " " + last;
}
// when a function returns a value, we can put that value into a variable
let fullName = getFullName("Manny", "Gonzalez");
console.log(fullName);

// putting all of these together
function makePizza(promptInfo1, promptInfo2) {
  let ingredient1 = prompt(promptInfo1);
  let ingredient2 = prompt(promptInfo2);

  let output =
    "Here is your pizza with extra " + ingredient2 + ", and no " + ingredient1;

  return output;
}
let ultimateFood = makePizza(
  "What is your favourite pizza topping?",
  "What is your LEAST favourite topping?"
);
console.log(ultimateFood);
