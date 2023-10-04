const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

// make sure the user only has 25 clicks
let userClicks = 0;
const maxClicks = 25;

// a constructor that makes product objects
function Product(name) {
  this.name = name;
  this.src = `./images/${name}.jpg`;
  this.views = 0;
  this.clicks = 0;
}

const products = [
  new Product("bag"),
  new Product("banana"),
  new Product("bathroom"),
  new Product("boots"),
  new Product("breakfast"),
  new Product("bubblegum"),
  new Product("chair"),
  new Product("cthulhu"),
  new Product("dog-duck"),
  new Product("dragon"),
  new Product("pen"),
  new Product("pet-sweep"),
  new Product("scissors"),
  new Product("shark"),
  new Product("sweep"),
  new Product("tauntaun"),
  new Product("unicorn"),
  new Product("water-can"),
  new Product("wine-glass"),
];

// function that randomly gets a index for an item in item
function randomProdIdx() {
  return Math.floor(Math.random() * products.length);
}

// make a function that puts 3 random products on the page (using the 3 img tags)
function renderProducts() {
  // get 3 indexs from our products array
  let prod1 = randomProdIdx();
  let prod2 = randomProdIdx();
  let prod3 = randomProdIdx();

  // make sure they aren't the same
  while (prod1 === prod2 || prod1 === prod3 || prod2 === prod3) {
    prod2 = randomProdIdx();
    prod3 = randomProdIdx();
  }

  // change the src and alt attributes of our img tags
  img1.src = products[prod1].src;
  img2.src = products[prod2].src;
  img3.src = products[prod3].src;
  img1.alt = products[prod1].name;
  img2.alt = products[prod2].name;
  img3.alt = products[prod3].name;

  // increase the views of the displayed objects
  products[prod1].views++;
  products[prod2].views++;
  products[prod3].views++;
}

// handle what happens when click the image
// the "clicks" property of the image I click to go up by one
// render 3 new images
function handleImgClick(event) {
  // check if the user has run out of clicks
  if (userClicks === maxClicks) {
    alert("You have run out of votes");
    renderChart();
    return; // end the function here and don't run the rest
  }

  // increase the number of times the user has clicked
  userClicks++;

  // get the name of the clicked product
  let clickedProduct = event.target.alt;

  // increase the clicks of the product
  for (let i = 0; i < products.length; i++) {
    if (clickedProduct === products[i].name) {
      products[i].clicks++;
      break; // break because we found what we are looking for
    }
  }

  // render 3 more images
  renderProducts();
}

img1.addEventListener("click", handleImgClick);
img2.addEventListener("click", handleImgClick);
img3.addEventListener("click", handleImgClick);

// a button to view the results
function showResults() {
  // put a bunch of lis into a ul
  const results = document.getElementById("results");

  // loop through our products and make an li for each one
  for (let i = 0; i < products.length; i++) {
    const li = document.createElement("li");
    const product = products[i];
    li.textContent = `${product.name} was viewed ${product.views} times, and clicked ${product.clicks} times`;
    results.appendChild(li);
  }
}

// make the button show the results
const viewResults = document.getElementById("view-results");
viewResults.addEventListener("click", showResults);

renderProducts();

// function to create a new chart
function renderChart() {
  const ctx = document.getElementById("myChart");

  const labels = [];
  const views = [];
  const clicks = [];

  // loop through my products array and add in the label, views and clicks data to my arrays
  for (let i = 0; i < products.length; i++) {
    labels.push(products[i].name);
    views.push(products[i].views);
    clicks.push(products[i].clicks);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of views",
          data: views,
          borderWidth: 1,
        },
        {
          type: "line",
          label: "# of clicks",
          data: clicks,
          borderWidth: 1,
        },
      ],
    },
  });
}
