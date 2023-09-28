const form = document.querySelector("form");

// we are listening to the submit event of our form
form.addEventListener("submit", function (event) {
  // the default behaviour of submit is:
  // - refresh the page
  // - add information to the url
  // so here we are preventing that from happening
  event.preventDefault()

  // we are collecting the information from the event object to get the users inputs
  const username = event.target.username.value;
  const email = event.target.email.value;

  // using DOM manipulation to add the response to the page (just so we can see it)
  const subs = document.getElementById("subs");
  const p = document.createElement("p")
  p.textContent = `${username} with the email ${email} has requested to be contacted.`
  subs.appendChild(p)
})

