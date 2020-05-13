import Piece from "./base/Piece";

export class Red extends Piece {
  constructor() {
    super('red');
  }
}

export class Blue extends Piece {
  constructor() {
    super('blue');
  }
}

export class Yellow extends Piece {
  constructor() {
    super('yellow');
  }
}

export class Green extends Piece {
  constructor() {
    super('green');
  }
}

export const availablePieces = [
  new Red(), new Blue(), new Yellow(), new Green()
]
