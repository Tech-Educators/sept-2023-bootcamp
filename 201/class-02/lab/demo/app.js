console.log("hello world");

let eduQ = prompt("Do I have a degree in art history? (yes/no)").toLowerCase();

// qwertyuio
// make sure the answer is either yes or no
//        true        &&     true
while (eduQ !== "yes" && eduQ !== "no") {
  eduQ = prompt("Got to be yes or no").toLowerCase();
}

// checking the answer
if (eduQ === "yes") {
  alert("YES! I am an historian!");
} else {
  alert("You are so silly!");
}
