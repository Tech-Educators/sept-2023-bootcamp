const levees = document.getElementById("levees");
const randomiser = document.getElementById("randomiser");

randomiser.addEventListener("click", function () {
  levees.volume = Math.random(); // 0.0 - 1.0
  levees.autoplay = true;
});
