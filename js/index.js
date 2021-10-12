import Puzzle from "./puzzle.js";

// DOM
const imageInput = document.body.querySelector("#image");
const parentEl = document.body.querySelector("#puzzle-game");

// Main Program
imageInput.addEventListener("change", function () {
  const imgObject = this.files[0];
  const fullPath = URL.createObjectURL(imgObject);

  parentEl.innerHTML = ""; //clean HTML

  new Puzzle(fullPath, 500, 3, parentEl);
});
