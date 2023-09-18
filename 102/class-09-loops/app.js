console.log('Hello, world!');


console.log("Hey");

function greet() {
  let username = prompt("What is your name?");
  document.write("Hello " + username);
}

function askTime() {
  let time = prompt("What hour is it? (0-23)");
  let message;

  if (time <= 11) {
    message = "Good morning";
  } else if (time <= 17) {
    message = "Good afternoon";
  } else if (time < 24) {
    message = "Good evening";
  } else {
    message = "My friend, that is not a time!";
  }

  document.write(message);
}



// basic for loop with counter 
// for (let counter = 0; counter < 20; counter = counter + 1) {
//     console.log('My name is sam!' + counter)
// }

function getRating() {
    let rating = prompt('Rate my site between 1-5','5');

    // validate / check that they input a number between 1 - 5; 

    while (rating < 0 || rating >= 5) {
      rating = prompt('Please enter a number 5 or lower!')
    } 

    // while (!(rating > 0 && rating <= 5)) {
    //   rating = prompt('Please enter a number 5 or lower!')
    // } 

    for (let i = 0; i < rating; i++) {
        document.write("<img src='star.png'/>")
    }
}

