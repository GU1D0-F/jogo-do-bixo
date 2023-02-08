import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  
  return (
    <center>
      <div className="App">
        <div>
          <NavLink to="/">
            Home  |
          </NavLink>
          <NavLink to="/about">
            Apostas
          </NavLink>
        </div>
      </div>
    </center>
  )
};

export default Navigation;