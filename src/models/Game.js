import { Board } from "./Board";
import * as Config from "./../config";
import { Row } from "./Row";

export class Game {
    constructor() {
        this.board = new Board();
        this.foundAnswer = false;
    }

    play() {
        this.generateAnswer();

        let guessesCount = 0;
        while (guessesCount++ < Config.MAX_GUESSES) {
            this.guess(guessesCount);
            if (this.foundAnswer) {
                break;
            }
        }

        let resultString = this.foundAnswer ? 'WIN' : 'LOSE';
        console.log(`${resultString} after ${guessesCount} iterations`);
    }

    generateAnswer() {
        this.board.answerRow = new Row(Row.generateCode(false));
    }

    guess(iteration) {
        let guessRow = new Row(Row.generateGuess(iteration !== 1));
        this.board.storeGuess(guessRow);
        this.foundAnswer = guessRow.compare(this.board.answerRow);
    }
}
