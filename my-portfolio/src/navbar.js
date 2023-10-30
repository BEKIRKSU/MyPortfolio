import React from 'react';
import './Navbar.css';

const Navbar = ({ onBackToHome }) => {
  return (
    <nav>
      <div className="name-area">
      <img src="https://img.freepik.com/premium-vector/bk-logo_590037-244.jpg?w=2000" alt="Logo" />
        <h2 className="name-surname">FULL NAME</h2>
      </div>
      <button className="sign-out" onClick={onBackToHome}>
        Sign out
      </button>
    </nav>
  );
};

export default Navbar;
