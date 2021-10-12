import Cell from "./cell.js";

export default class Puzzle {
  img;
  dimension;
  width;
  height;
  parentEl;
  cells = [];

  constructor(img, width, dimension = 3, parentEl) {
    this.img = img;
    this.width = width;
    this.dimension = dimension;
    this.parentEl = parentEl;
    this.getPuzzleHeight();
  }

  createPuzzleElement() {
    const div = document.createElement("div");
    div.style.height = `${this.height}px`;
    div.style.width = `${this.width}px`;
    div.style.backgroundImage = `url(${this.img})`;
    div.style.backgroundSize = "contain";

    this.parentEl.append(div);
  }

  getPuzzleHeight() {
    const img = new Image();

    img.onload = () => {
      this.height = (this.width * img.height) / img.width;

      this.createPuzzleElement();
    };

    img.src = this.img;
  }

  swapPosition() {}
}
