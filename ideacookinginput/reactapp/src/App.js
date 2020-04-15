import React from 'react';
import './App.css';
import Recipe from './Recipe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';


function App() {
  return (
    <Router>
        <div>
          <Nav />
          <Route path="/inputrecipe" component={Recipe} />
        </div> 
    </Router>
    
  );
}

export default App;
