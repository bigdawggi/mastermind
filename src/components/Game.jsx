import React, { Component } from "react";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: props.game
        };
        this.playGame = this.playGame.bind(this);
    }
    playGame() {
        console.log('playing game');
        this.setState({ game: this.state.game.play() });
    }
    render() {
        return (
            <div>
                <h2>This is the game</h2>
                <p> We found the answer, Yes or No?</p>
                <p><strong>{this.state.game.foundAnswer ? 'Yes' : 'No'}</strong></p>
                <button onClick={this.playGame}>Play the game</button>
            </div>
        );
    }
}

export default Game;
