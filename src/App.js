import React,{Component} from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import "./App.css";
import Food from "./food";
import ChefProfile from "./chef-profile";
import Result from "./result";

import List from "./List";

function App (){

    return (
        // <div>
        //     <List/>
        // </div>
        <Router>
        <div>  
            <Switch>
                <Route component={ChefProfile} exact path="/Profile/:id"/>
                <Route component={Result} exact path="/result/:id"/>
                <Route component={Food} exact path="/result/:id/:id"/>

            </Switch>
        </div>
        </Router>
    );
}


export default App;