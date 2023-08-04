import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onBackToHome }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* Add more menu items as needed */}
      </ul>
      <button className="back-to-home" onClick={onBackToHome}>
        Back to Home
      </button>
    </nav>
  );
};

export default Navbar;