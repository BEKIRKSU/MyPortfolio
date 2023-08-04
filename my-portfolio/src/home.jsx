import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="App">
      {/* Profile Button */}
      <Link to="/profile">
        <button className="profile-button">Profile</button>
      </Link>

      <header className="App-header">
        <h1>My Portfolio</h1>
        <button class="make-my-portfolio-button">Make my digital portfolio</button>
      </header>
    </div>
  );
};

export default HomePage;