import Puzzle from "./puzzle.js";

// DOM
const imageInput = document.body.querySelector("#image");
const parentEl = document.body.querySelector("#puzzle-game");

// Main Program
let puzzleImage = null;

imageInput.addEventListener("change", function () {
  URL.revokeObjectURL(puzzleImage); //release memory

  puzzleImage = this.files[0];
  const fullPath = URL.createObjectURL(puzzleImage);

  parentEl.innerHTML = ""; //clean HTML

  new Puzzle(fullPath, 500, 3, parentEl);
});
