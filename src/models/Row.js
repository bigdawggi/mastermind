import { RowResults } from "./RowResults";
import { Code } from "./Code";
import { Guess } from "./Guess";
import { Yellow } from "./pieces";

export class Row {
  constructor(code) {
    this.code = code;
    this.results = new RowResults();
  }

  /**
   * Generates a Code object with a random code in it
   */
  static generateCode() {
    let code = new Code();
    code.generate();
    return code;
  }

  /**
   * Generates a Guess object with a random code if smartly is false, otherwise
   * it'll do some logic to create a good guess.
   *
   */
  static generateGuess(smartly = false) {
    let guess = new Guess();
    if (smartly) {
      guess.generateSmartly();
    } else {
      guess.generate()
    }
    return guess;
  }

  /**
   * Compares this Row's Code against the answerRow's Code.
   *
   * @param {Row} answerRow
   *
   * @returns bool Whether or not the rows match entirely
   */
  compare(answerRow) {
    this.compareForExactMatches(answerRow);
    this.compareForColorMatches(answerRow);
    return this.results.isEntireMatch();
  }

  compareForExactMatches(answerRow) {
    let code = this.getCode(),
        exactMatches = [];
    _.each(code.retrieve(), (placement) => {
      let answerPlacement = answerRow.getCode().retrieve()[placement.index - 1];
      if (placement.piece.color === answerPlacement.piece.color) {
        exactMatches.push(placement);
      }
    });
    this.results.storeCorrectPlacements(exactMatches);
  }

  compareForColorMatches(answerRow) {
    let guessCountByColor = null,
        guessUniqueColors = null,
        answerCountByColor = null,
        answerUniqueColors = null,
        matchingColors = null,
        colorMatches = {};

    answerCountByColor = _.countBy(answerRow.getCode().retrieve(), (placement) => {
      return placement.piece.color;
    });
    answerUniqueColors = _.uniq(_.map(answerRow.getCode().retrieve(), (placement) => {
      return placement.piece.color;
    }));
    guessCountByColor = _.countBy(this.getCode().retrieve(), (placement) => {
      return placement.piece.color;
    });
    guessUniqueColors = _.uniq(_.map(this.getCode().retrieve(), (placement) => {
      return placement.piece.color;
    }));


    matchingColors = _.intersection(guessUniqueColors, answerUniqueColors);

    /**
     * General syntax of object:
     * colorMatches = {
     *   yellow: 5,
     *   red: 1,
     * }
     */
    _.each(matchingColors, (color) => {
      colorMatches[color] = (guessCountByColor[color] >= answerCountByColor[color])
        ? answerCountByColor[color]
        : guessCountByColor[color];
    });

    this.results.storeCorrectColorCount(_.sum(_.values(colorMatches)));
  }

  /**
   * Return the Code object assigned to this Row
   */
  getCode() {
    return this.code;
  }
}
