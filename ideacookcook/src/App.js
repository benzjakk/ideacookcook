import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./component/styles/appstyles.css";
import Header from "./component/header.jsx";
import Home from "./page/home.jsx";
import Editprofile from "./page/editprofile.jsx";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/editprofile" component={Editprofile} />
        </switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
