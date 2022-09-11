import React from 'react';
import '../App';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/students'>Students</Link>
        <Link to='/teachers'>Teachers</Link>
    </div>
  );
};

export default NavBar