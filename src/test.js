import _ from 'lodash';
import { Row } from './models/Row';
import { Placement } from './models/Placement';
import { Guess } from './models/Guess';
import { Code } from './models/Code';
import { Red, Yellow, Green, Blue } from './models/pieces';



let buildRow = (items, isGuess = true) => {
    let row = new Row((isGuess) ? new Guess() : new Code());
    _.each(items, (item, idx) => {
        row.code.code.push(new Placement(
            idx + 1,
            new item()
        ));
    });
    return row;
}

let answer = [Red, Blue, Blue, Yellow];
let tests = [
    {
        result: true,
        code: [Red, Blue, Blue, Yellow]
    },
    {
        result: false,
        code: [Green, Red, Blue, Yellow]
    },
    {
        result: false,
        code: [Green, Green, Green, Green]
    },
    {
        result: false,
        code: [Green, Green, Green, Red]
    },
];

let answerRow = buildRow(answer, false);
_.each(tests, (test, idx) => {
    let row = buildRow(test.code);
    console.log(`Guess${idx} should be ${test.result}:`, row.compare(answerRow), row.results);
});
