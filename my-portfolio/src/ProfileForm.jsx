import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const [experienceData, setExperienceData] = useState([{ title: '', year: '', duration: '', details: '' }]);
  const [educationData, setEducationData] = useState([{ level: '', year: '', details: '' }]);
  const [skillsData, setSkillsData] = useState([{ skillName: '', details: '' }]);
  const [hobbiesData, setHobbiesData] = useState([{ hobbyName: '', details: '' }]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleAddExperience = () => {
    setExperienceData([...experienceData, { title: '', year: '', duration: '', details: '' }]);
  };

  const handleRemoveExperience = (index) => {
    const updatedData = [...experienceData];
    updatedData.splice(index, 1);
    setExperienceData(updatedData);
  };

  const handleAddEducation = () => {
    setEducationData([...educationData, { level: '', year: '', details: '' }]);
  };

  const handleRemoveEducation = (index) => {
    const updatedData = [...educationData];
    updatedData.splice(index, 1);
    setEducationData(updatedData);
  };

  const handleAddSkill = () => {
    setSkillsData([...skillsData, { skillName: '', details: '' }]);
  };

  const handleRemoveSkill = (index) => {
    const updatedData = [...skillsData];
    updatedData.splice(index, 1);
    setSkillsData(updatedData);
  };

  const handleAddHobby = () => {
    setHobbiesData([...hobbiesData, { hobbyName: '', details: '' }]);
  };

  const handleRemoveHobby = (index) => {
    const updatedData = [...hobbiesData];
    updatedData.splice(index, 1);
    setHobbiesData(updatedData);
  };
  
  return (
    <div className='profile-form'>
      <div >
        <div className='tab-buttons'
          onClick={() => handleTabClick('experience')}
          style={{ cursor: 'pointer', padding: '10px', border: selectedTab === 'experience' ? '2px solid blue' : '1px solid black' }}
        >
          Experience
        </div>
        <div className='tab-buttons'
          onClick={() => handleTabClick('education')}
          style={{ cursor: 'pointer', padding: '10px', border: selectedTab === 'education' ? '2px solid blue' : '1px solid black' }}
        >
          Education
        </div>
        <div className='tab-buttons'
          onClick={() => handleTabClick('skills')}
          style={{ cursor: 'pointer', padding: '10px', border: selectedTab === 'skills' ? '2px solid blue' : '1px solid black' }}
        >
          Skills
        </div>
        <div className='tab-buttons'
          onClick={() => handleTabClick('hobbies')}
          style={{ cursor: 'pointer', padding: '10px', border: selectedTab === 'hobbies' ? '2px solid blue' : '1px solid black' }}
        >
          Hobbies
        </div>
      </div>
      {selectedTab === 'experience' && (
  <div className="profile-form-content">
    <div className="experience-container">
      {experienceData.map((experience, index) => (
        <div key={index} className="experience-inputs">
          <input type="text" placeholder="Experience Title" />
          <input type="text" placeholder="Year of Experience" />
          <div className="duration-select">
            {/* ... */}
          </div>
          <input type="text" placeholder='Details' />
          <button onClick={() => handleRemoveExperience(index)}>Remove</button>
        </div>
      ))}
    </div>
    <button onClick={handleAddExperience}>Add</button>
  </div>
)}
     {selectedTab === 'education' && (
  <div className="profile-form-content">
    <div className="education-container">
      {educationData.map((education, index) => (
        <div key={index} className="education-inputs">
          <input type="text" placeholder="Level of education" />
          <input type="text" placeholder="Year of graduation" />
          <input type="text" placeholder='Details' />
          <button onClick={() => handleRemoveEducation(index)}>Remove</button>
        </div>
      ))}
    </div>
    <button onClick={handleAddEducation}>Add</button>
  </div>
)}

{selectedTab === 'skills' && (
  <div className="profile-form-content">
    <div className="skills-container">
      {skillsData.map((skill, index) => (
        <div key={index} className="skills-inputs">
          <input type="text" placeholder="Skill name" />
          <input type="text" placeholder="Details" />
          <button onClick={() => handleRemoveSkill(index)}>Remove</button>
        </div>
      ))}
    </div>
    <button onClick={handleAddSkill}>Add</button>
  </div>
)}

{selectedTab === 'hobbies' && (
  <div className="profile-form-content">
    <div className="hobbies-container">
      {hobbiesData.map((hobby, index) => (
        <div key={index} className="hobbies-inputs">
          <input type="text" placeholder="Hobby name" />
          <input type="text" placeholder="Details" />
          <button onClick={() => handleRemoveHobby(index)}>Remove</button>
        </div>
      ))}
    </div>
    <button onClick={handleAddHobby}>Add</button>
  </div>
)}

  );
};

export default ProfileForm;









  

     