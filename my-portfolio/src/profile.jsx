import React from 'react';

const Profile = ({ onClose }) => {
  return (
    <div className="profile-modal">
         <div className="profile-header">
        <div className="name-placeholder">NAME SURNAME</div>
      </div>
      <h2>Profile Information</h2>
      {/* Add your profile content here */}
      <button onClick={onClose}>Home</button>
    </div>
  );
};

export default Profile;



  
      