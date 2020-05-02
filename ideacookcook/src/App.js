import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Food from "./page/food";
import ChefProfile from "./page/chef-profile";
import Result from "./page/result";
import "./component/styles/appstyles.css";
import Header from "./component/header.jsx";
import Home from "./page/home.jsx";
import Editprofile from "./page/editprofile.jsx";
import Recipe from "./page/Recipe";

import List from "./List";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Switch>
          <Route component={ChefProfile} exact path="/Profile/:id" />
          <Route component={Result} exact path="/result/:id" />
          <Route
            component={(props) => (
              <Food
                {...props}
                myName={"eiei"}
                myPic={""}
                myID={"g2gfnWS9W2dfqlA31DhlC5LwttR2"}
              />
            )}
            exact
            path="/menu/:id"
          />
          <Route path="/" exact component={Home} />
          <Route path="/editprofile" component={Editprofile} />
          <Route path="/upload" component={Recipe} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
