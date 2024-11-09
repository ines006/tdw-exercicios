
import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

  return (
    <nav>
      <ul>
        <span><Link to="/ex1">Exercício 1</Link></span>
        <span> | </span>
        <span><Link to="/ex2">Exercício 2</Link></span>
      </ul>
    </nav>  
  );
}

export default Navbar;
