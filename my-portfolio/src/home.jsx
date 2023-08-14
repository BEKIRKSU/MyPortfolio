import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="App">
      <Link to="/profile">
        <button className="profile-button">Profile</button>
      </Link>

      <header className="App-header">
        <h1>My Portfolio</h1>
        <Link to="/Sign-up">
        <button class="make-my-portfolio-button">Make my digital portfolio</button>
        </Link>
      </header>
    {/* <div>
      <Footer />
      </div> */}
    </div>
  );
};

export default HomePage;