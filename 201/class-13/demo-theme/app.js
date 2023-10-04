// get the current theme, and add the relevant class
const theme = localStorage.getItem("theme");

if (theme === "light") {
  // if the LS theme is light
  document.body.classList.add("light");
} else if (theme === "dark") {
  // if the LS theme is dark
  document.body.classList.add("dark");
} else {
  // if we HAVEN'T got a LS theme
  document.body.classList.add("light");
  // add the light theme if there is none
  localStorage.setItem("theme", "light");
}

function toggleTheme() {
  // change what is in localStorage from light to dark or dark to light
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  // toggle the theme classes
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

const themeBtn = document.getElementById("theme");
themeBtn.addEventListener("click", toggleTheme);
