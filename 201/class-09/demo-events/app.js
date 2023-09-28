// get my button DOM node
// querySelector gets the FIRST item that matches the selector
const myButton = document.querySelector("button");

// myButton has an event listener, that when you click, run the callback function (cbf)
myButton.addEventListener("click", function () {
  myButton.classList.toggle("tomato") // check if tomato is on the button
  myButton.classList.toggle("blueviolet") // check if blueviolet is on the button
})
