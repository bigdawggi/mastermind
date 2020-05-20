import React, { Component } from "react";
import "./App.css";
import { Game as GameModel } from './models/Game';
import Game from './components/Game';

class App extends Component {
    constructor(props) {
        super(props);
    }
    doGame() {
        game.play();
        console.log(game);
    }
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
                <Game game={new GameModel()}></Game>
            </div>
        );
    }
}

export default App;
