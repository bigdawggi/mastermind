import _ from 'lodash';
import * as Config from './config';
import { Code } from './models/Code';
import { Guess } from './models/Guess';

let answerCode = new Code();
answerCode.generate();

console.log('The code is: ', answerCode.retrieve());


let guessCount = 1;
let foundAnswer = false;
while (++guessCount < Config.MAX_GUESSES) {
  let guess = new Guess();
  foundAnswer = guess.compare(answerCode);
  if (foundAnswer) {
    break;
  }
}

console.log(`Iterations: ${guessCount}`, foundAnswer ? 'WIN' : 'LOSE');
