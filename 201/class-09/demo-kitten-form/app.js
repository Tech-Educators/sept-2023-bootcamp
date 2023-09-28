// problem domain: the Aunby Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned // will do that later
// - a list of what they like
// - an image
// - good with kids
// - good with dogs
// - good with other cats
// - breed


// Kitten Factory
function Kitten(name, age, interests, image, kids, dogs, cats, breed) {
  this.name = name;
  this.age = age;
  this.interests = interests;
  this.image = image;
  this.goodWithKids = kids;
  this.goodWithDogs = dogs;
  this.goodWithCats = cats;
  this.breed = breed;
}

// Adding a method to ALL Kittens called render (we chose the name render, it can be called anything)
Kitten.prototype.render = function () {
  // get (from the DOM) who the parent element is going to be. where am I attaching this new element
  const kittenProfiles = document.getElementById("kittenProfiles");

  // create a new element, or elements, that represent frankie
  const article = document.createElement("article");

  // inside that article, i need to put a h2 for the name, paragraph with their age, ul and some li's with their interests, image
  // name
  const h2 = document.createElement("h2"); // <h2></h2>
  h2.textContent = this.name; // <h2>Trevor</h2>
  article.appendChild(h2); // <article><h2>Trevor</h2></article>

  // age
  const p = document.createElement("p");
  p.textContent = `${this.name} is ${this.age} months old.`;
  article.appendChild(p);

  // interests
  const ul = document.createElement("ul");
  for (let i = 0; i < this.interests.length; i++) {
    const li = document.createElement("li");
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }
  article.appendChild(ul);

  // image
  const img = document.createElement("img");
  img.src = this.image;
  img.setAttribute("alt", this.name);
  article.appendChild(img);

  // add the article to the page (by appending to the kittenProfiles div)
  kittenProfiles.appendChild(article);
}

const trevor = new Kitten("Trevor", 2, ["Philosophy", "Bacon", "Fish", "Minimilism"], "./images/trevor.jpg", true, false, false, "ginger")

const phylis = new Kitten("Phylis", 8, ["Boxing", "Taekondo", "Karate", "krav maga", "The Joe Rogan Experience"], "./images/phylis.jpeg", true, false, false, "tortoise shell")


trevor.render()
phylis.render()


// my form event listener
const form = document.getElementById("newcatform");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // get the users input from the form
  const name = event.target.name.value;
  const age = event.target.age.value;

  // create a new kitten with that input
  // we are faking the rest of the properties, but we are using the new name and age
  const newKitten = new Kitten(name, age, ["Philosophy", "Bacon", "Fish", "Minimilism"], "./images/trevor.jpg", true, false, false, "ginger");

  newKitten.render();
})