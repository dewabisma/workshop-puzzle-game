import Cell from "./cell.js";

export default class Puzzle {
  img = "";
  dimension = 0;
  width = 0;
  height = 0;
  parentEl = null;
  cells = [];
  size = 0;
  boardEl = null;

  constructor(img, width, dimension = 3, parentEl) {
    this.img = img;
    this.width = width;
    this.dimension = dimension;
    this.parentEl = parentEl;
    this.size = dimension * dimension;
    this.getPuzzleHeight();
  }

  createPuzzleElement() {
    const div = document.createElement("div");
    div.style.height = `${this.height}px`;
    div.style.width = `${this.width}px`;
    div.style.position = "relative";
    // div.style.backgroundImage = `url(${this.img})`;
    // div.style.backgroundSize = "contain";

    this.parentEl.append(div);

    return div;
  }

  getPuzzleHeight() {
    const img = new Image();

    img.onload = () => {
      this.height = (this.width * img.height) / img.width;

      this.boardEl = this.createPuzzleElement();
      this.setupPuzzle();
    };

    img.src = this.img;
  }

  setupPuzzle() {
    for (let i = 0; i < this.size; i++) {
      const cell = new Cell(this, i);

      this.cells.push(cell);
      this.boardEl.append(cell.cellEl);
    }
  }

  swapPosition() {}

  checkPuzzleSolved() {}

  getHiddenCell() {}

  isSwappable() {}
}
