import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

let elem = document.createElement('div');
document.getElementsByTagName('body')[0].appendChild(elem);
ReactDOM.render(<App />, elem);
