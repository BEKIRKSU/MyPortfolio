import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className='profile-form'>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div
          onClick={() => handleTabClick('experience')}
          style={{ cursor: 'pointer', padding: '10px', border: selectedTab === 'experience' ? '2px solid blue' : '1px solid black' }}
        >
          Experience
        </div>
        <div
          onClick={() => handleTabClick('education')}
          style={{ cursor: 'pointer', padding: '10px', border: selectedTab === 'education' ? '2px solid blue' : '1px solid black' }}
        >
          Education
        </div>
        <div
          onClick={() => handleTabClick('skills')}
          style={{ cursor: 'pointer', padding: '10px', border: selectedTab === 'skills' ? '2px solid blue' : '1px solid black' }}
        >
          Skills
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
        </div>
      )}
      {selectedTab === 'experience' && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <input type="text" placeholder="Experience name" />
          <input type="text" placeholder="Year of experience" />
          <input type="text" placeholder="Duration" />
        </div>
      )}
      {selectedTab === 'skills' && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <input type="text" placeholder="Skill name" />
          <input type="text" placeholder="Years of experience" />
        </div>
      )}
      {selectedTab === 'hobbies' && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <input type="text" placeholder="Hobby name" />
          <input type="text" placeholder="Description" />
        </div>
      )}
    </div>
  );
};

export default ProfileForm;






