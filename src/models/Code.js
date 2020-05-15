import * as Pieces from "./pieces";
import * as Config from './../config';
import { Placement } from "./Placement";

export class Code {
    constructor() {
        this.code = [];
    }

    retrieve() {
        return this.code;
        return this.code.map((foo) => { return foo.color; });
    }

    generate() {
        let i = 0;
        while (++i <= Config.CODE_LENGTH) {
            let randomKey = _.random(Pieces.availablePieces.length - 1);
            this.code.push(new Placement(
                i,
                Pieces.availablePieces[randomKey]
            ));
        }
        return this;
    }
}
