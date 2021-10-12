export default class Cell {
  index;
  puzzleBoardEl;
  puzzleImg;

  constructor(img, puzzleBoardEl, index) {
    this.index = index;
    this.puzzleImg = img;
    this.puzzleBoardEl = puzzleBoardEl;
  }

  createCellElement() {}

  getCellPosition() {}

  setCellPosition() {}

  setCellBackgroundImgPosition() {}
}
