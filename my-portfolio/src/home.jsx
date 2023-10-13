import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="App">
      <Link to="/profile">
        <button className="profile-button">Proile</button>
      </Link>

      <header className="App-header">
        <h1>My Portfolio</h1>
        <Link to="/Sign-up">
        <button class="make-my-portfolio-button">Make my digital portfolio</button>
        </Link>
      </header>
    </div>
  );
};

export default HomePage;