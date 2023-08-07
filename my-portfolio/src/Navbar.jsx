import React from 'react';
import './navbar.css';

const Navbar = ({ onBackToHome }) => {
  return (
    <nav>
      <div className="name-area">
        <h2 className="name-surname">NAME SURNAME</h2>
      </div>
      <h1 className="logo">LOGO</h1>
      <button className="sign-out" onClick={onBackToHome}>
        Sign out
      </button>
    </nav>
  );
};

export default Navbar;
