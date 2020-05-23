import React, { Component } from "react";
import "./App.css";
import Game from './components/Game';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <Game></Game>
            </div>
        );
    }
}

export default App;
