import React,{Component} from "react";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Food from "./food";
import ChefProfile from "./chef-profile";
class App extends Component{
    render(){

    return (
        <Router>
        <div>  
            <Switch>
                <Route component={Food} path="/food"/>
                <Route component={ChefProfile} path="/chefProfile"/>
            </Switch>
        </div>
        </Router>
    );
    } 
}


export default App;