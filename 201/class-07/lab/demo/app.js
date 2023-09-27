const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// get the table from the HTML so we can add rows
const table = document.getElementById("salesData");

// give a random number between two numbers
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// CookieStore Factory. It makes CookieStore objects
function CookieStore(location, minCust, maxCust, average) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = average;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSold = 0;
}

CookieStore.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    // get the number of customers for this hour
    const hourCustomers = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(hourCustomers);

    // get the number of cookies sold this hour
    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust)
    this.cookiesPerHour.push(hourCookiesSold);

    // increase the total cookies by adding this hours sales to it
    this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
  }
}

CookieStore.prototype.render = function () {
  // calculating sales data before rendering
  this.calculateSales()

  // create a row
  const tr = document.createElement("tr");

  // add the store name to the row
  const th = document.createElement("th");
  th.textContent = this.location;
  tr.appendChild(th)

  // add this store's data to that row
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    // create a new td and put the sales number in it
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td)
  }

  // add that row to the table
  table.appendChild(tr)
}

// create our store objects
const seattle = new CookieStore("Seattle", 23, 65, 6.3)
const tokyo = new CookieStore("Tokyo", 3, 24, 1.2)
const dubai = new CookieStore("Dubai", 11, 38, 3.7)
const paris = new CookieStore("Paris", 20, 38, 2.3)
const lima = new CookieStore("Lima", 2, 16, 4.6)

// claculate sales for each store (commented out because the calculate sales in the render method)
// seattle.calculateSales()
// tokyo.calculateSales()
// dubai.calculateSales()
// paris.calculateSales()
// lima.calculateSales()

// render each store on the page
seattle.render()
tokyo.render()
dubai.render()
paris.render()
lima.render()