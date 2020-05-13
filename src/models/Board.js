export class Board {
  constructor() {
    this.answerRow = null;
    this.guessRows = [];
  }

  storeGuess(row) {
    this.guessRows.push(row);
  }
}
