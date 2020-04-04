import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import Loginer from "./component/loginer";
import "./component/headerstyles.css";
import "./component/loginstyles.css";

ReactDOM.render(<Loginer />, document.getElementById("id01"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
