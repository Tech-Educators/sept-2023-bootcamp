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

const trevor = {
  name: "Trevor",
  age: 2,
  interests: ["Philosophy", "Bacon", "Fish", "Minimilism"],
  image: "./images/trevor.jpg",
  goodWithKids: true,
  goodWithDogs: false,
  goodWithCats: false,
  breed: "ginger",
};

// we need to:
// get (from the DOM) who the parent element is going to be. where am I attaching this new element
const kittenProfiles = document.getElementById("kittenProfiles");

// create a new element, or elements, that represent frankie
const article = document.createElement("article");

// inside that article, i need to put a h2 for the name, paragraph with their age, ul and some li's with their interests, image
// name
const h2 = document.createElement("h2"); // <h2></h2>
h2.textContent = trevor.name; // <h2>Trevor</h2>
article.appendChild(h2); // <article><h2>Trevor</h2></article>

// age
const p = document.createElement("p");
p.textContent = `${trevor.name} is ${trevor.age} months old.`;
article.appendChild(p);

// interests
const ul = document.createElement("ul");
for (let i = 0; i < trevor.interests.length; i++) {
  const li = document.createElement("li");
  li.textContent = trevor.interests[i];
  ul.appendChild(li);
}
article.appendChild(ul);

// image
const img = document.createElement("img");
img.src = trevor.image;
img.setAttribute("alt", trevor.name);
article.appendChild(img);

// add the article to the page (by appending to the kittenProfiles div)
kittenProfiles.appendChild(article);
