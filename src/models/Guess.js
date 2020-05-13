import _ from 'lodash';
import { Code } from './Code';


export class Guess extends Code {
  compare(answerCode) {
    return _.isEqual(answerCode.retrieve(), this.retrieve());
  }


  generateSmartly(previousGuesses) {
    this.generate();
    return this;
  }

}

