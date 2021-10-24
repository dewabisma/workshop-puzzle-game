export default class Cell {
  index;
  puzzleBoardEl;
  width;
  height;
  cellImg;
  cellEl;

  constructor(puzzleBoardEl, index) {
    this.index = index;
    this.cellImg = puzzleBoardEl.img;
    this.puzzleBoardEl = puzzleBoardEl;
    this.height = this.puzzleBoardEl.height / this.puzzleBoardEl.dimension;
    this.width = this.puzzleBoardEl.width / this.puzzleBoardEl.dimension;
    this.cellEl = this.createCellElement();
    this.setCellPosition();
    this.setCellBackgroundImgPosition();
  }

  createCellElement() {
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = `${this.width}px`;
    div.style.height = `${this.height}px`;
    div.style.backgroundImage = `url(${this.cellImg})`;
    div.style.backgroundSize = `${this.puzzleBoardEl.width}px ${this.puzzleBoardEl.height}px`;
    div.style.border = "2px solid #fafafa";

    return div;
  }

  getCellPosition() {
    const x = (this.index % this.puzzleBoardEl.dimension) * this.width;
    const y =
      Math.floor(this.index / this.puzzleBoardEl.dimension) * this.height;

    console.log(x, y);

    return { x, y };
  }

  setCellPosition() {
    const { x, y } = this.getCellPosition();

    this.cellEl.style.top = `${y}px`;
    this.cellEl.style.left = `${x}px`;
  }

  setCellBackgroundImgPosition() {
    const { x, y } = this.getCellPosition();

    this.cellEl.style.backgroundPosition = `-${x}px -${y}px`;
  }
}
