import React from 'react';
import './navbar.css';

const Navbar = ({ onBackToHome }) => {
  return (
    <nav>
      <button className="back-to-home" onClick={onBackToHome}>
        Back to Home
      </button>
    </nav>
  );
};

export default Navbar;