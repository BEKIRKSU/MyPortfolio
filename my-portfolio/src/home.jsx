import React, { useState } from 'react';
import Profile from './profile'; // Import the Profile component

const HomePage = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className="App">
      {/* Profile Button */}
      <button className="profile-button" onClick={handleProfileClick}>
        Profile
      </button>

      {/* Profile Modal */}
      {showProfile && <Profile onClose={handleCloseProfile} />}

      <header className="App-header">
        <h1>My Portfolio</h1>
        <button>Make my digital portfolio</button>
      </header>
    </div>
  );
};

export default HomePage;