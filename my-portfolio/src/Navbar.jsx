import React from 'react';
import './navbar.css';

const Navbar = ({ onBackToHome }) => {
  return (
    <nav>
      <button className="sign-out" onClick={onBackToHome}>
        Sign out
      </button>
    </nav>
  );
};

export default Navbar;