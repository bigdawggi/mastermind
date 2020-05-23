import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: props.game
        };
        this.playGame = this.playGame.bind(this);
    }
    playGame() {
        console.log('playing game, dudelies');
        this.setState({ game: this.state.game.play() });
    }
    render() {
        return (
            <div>
                <h2>This is the game</h2>
                <p> We found the answer, Yes or No?</p>
                <p><strong>{this.state.game.foundAnswer ? 'Yes' : 'No'}</strong></p>
                <Button onClick={this.playGame} variant="contained" color="primary">
                    Play the game
                </Button>
            </div>
        );
    }
}

export default Game;
