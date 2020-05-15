import * as Config from './../config';

export class RowResults {
    constructor() {
        this.correctColors = 0;
        this.correctPlacements = 0;
    }

    storeCorrectPlacements(placements) {
        this.correctPlacements = placements.length;
    }

    storeCorrectColorCount(totalCount) {
        this.correctColors = (totalCount - this.correctPlacements);
    }

    isEntireMatch() {
        return this.correctPlacements === Config.CODE_LENGTH;
    }
}
