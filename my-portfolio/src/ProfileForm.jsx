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
      {selectedTab === 'experience' && (
    <div className="profile-form-content">
      <div className="experience-inputs">
        <input type="text" placeholder="Experience Title" />
        <input type="text" placeholder="Year of Experience" />
        <div className="duration-select">
          <select>
            <option value="" disabled selected hidden>Duration</option>
            <option value="0-6 months">0-6 months</option>
            <option value="6-12 months">6-12 months</option>
            <option value="1-2 years">1-2 years</option>
            <option value="2-4 years">2-4 years</option>
            <option value="5-10 years">5-10 years</option>
            <option value="10 years+">10 years+</option>
          </select>
        </div>
        <input type="text" placeholder='Details' />
      </div>
    </div>
  )}
      {selectedTab === 'education' && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <input type="text" placeholder="Level of education" />
          <input type="text" placeholder="Year of graduation" />
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






