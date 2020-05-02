import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
        <nav>
          <Link to='/inputrecipe'>
          <li>inputrecipe</li>
          </Link>
        </nav>
    
  );
}

export default Nav;
