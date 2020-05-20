import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import { Game } from './models/Game';

class App extends Component {
    constructor(props) {
        super(props);
        this.doGame();
    }
    doGame() {
        let game = new Game();
        game.play();
        console.log(game);
    }
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
            </div>
        );
    }
}

export default hot(module)(App);
