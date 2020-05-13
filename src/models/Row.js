import { RowResults } from "./RowResults";
import { Code } from "./Code";
import { Guess } from "./Guess";

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
   */
  compare(answerRow) {
    console.debug(answerRow.getCode(), this.getCode());
    return this.getCode().compare(answerRow.getCode());
  }

  /**
   * Return the Code object assigned to this Row
   */
  getCode() {
    return this.code;
  }
}
