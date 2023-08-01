import React, { useState } from 'react';

const ProfileForm = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div
          onClick={() => handleTabClick('education')}
          style={{ cursor: 'pointer', padding: '10px', border: selectedTab === 'education' ? '2px solid blue' : '1px solid black' }}
        >
          Education
        </div>
        <div
          onClick={() => handleTabClick('experience')}
          style={{ cursor: 'pointer', padding: '10px', border: selectedTab === 'experience' ? '2px solid blue' : '1px solid black' }}
        >
          Experience
        </div>
        <div
          onClick={() => handleTabClick('hobbies')}
          style={{ cursor: 'pointer', padding: '10px', border: selectedTab === 'hobbies' ? '2px solid blue' : '1px solid black' }}
        >
          Hobbies
        </div>
      </div>
      {selectedTab === 'education' && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <input type="text" placeholder="Level of education" />
          <input type="text" placeholder="Year of graduation" />
          {/* Add more input boxes as needed */}
        </div>
      )}
      {selectedTab === 'experience' && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <input type="text" placeholder="Experience name" />
          <input type="text" placeholder="Year of experience" />
          <input type="text" placeholder="Duration" />
          {/* Add more input boxes as needed */}
        </div>
      )}
      {/* You can add similar code for 'hobbies' as well */}
    </div>
  );
};

export default ProfileForm;