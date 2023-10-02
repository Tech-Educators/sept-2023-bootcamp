// DOM Nodes
let goatContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");

// keep each goat in an object
function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

// function to choose a random goat
function getRandomIndex() {
  return Math.floor(Math.random() * allGoats.length);
}

// function to render 2 random goats
function renderGoats() {
  // get 2 rnadom indexes from our goat array
  let goat1Index = getRandomIndex();
  let goat2Index = getRandomIndex();

  // prevent the two images being the same goat
  while (goat1Index === goat2Index) {
    goat2Index = getRandomIndex();
  }

  // change the src of our 2 images
  image1.src = allGoats[goat1Index].src;
  image2.src = allGoats[goat2Index].src;
  image1.alt = allGoats[goat1Index].name;
  image2.alt = allGoats[goat2Index].name;

  // increase the goats views
  allGoats[goat1Index].views++;
  allGoats[goat2Index].views++;
}

// handle the goat being clicked
function handleGoatClick(event) {
  // get the name of the goat we just clicked
  let clickedGoat = event.target.alt;

  // check if the click is on an image
  if (event.target === goatContainer) {
    alert("Please click on an image");
  } else {
    // render more goats
    renderGoats();
  }

  // increase the clicks of the goat
  // loop through allGoats
  for (let i = 0; i < allGoats.length; i++) {
    // check if the name of the goat in the array, matches the alt tag of our image
    if (clickedGoat === allGoats[i].name) {
      // increase the number of clicks
      allGoats[i].clicks++;
      // stop the for loop because we found the goat
      break;
    }
  }
}

// make the goats
const allGoats = [
  new Goat("Cruising Goat", "./images/cruisin-goat.jpg"),
  new Goat("Float Your Goat", "./images/float-your-goat.jpg"),
  new Goat("Goat Out of Hand", "./images/goat-out-of-hand.jpg"),
  new Goat("Kissing Goat", "./images/kissing-goat.jpg"),
  new Goat("Sassy Goat", "./images/sassy-goat.jpg"),
  new Goat("Smiling Goat", "./images/smiling-goat.jpg"),
  new Goat("Sweater Goat", "./images/sweater-goat.jpg"),
];

// render the results
// when the user clicks the view results button
// render a ul full of lis that tell the user how many tiems each goat has been clicked

// add the event listener to the goats
goatContainer.addEventListener("click", handleGoatClick);

renderGoats();
