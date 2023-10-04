import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  const [experienceData, setExperienceData] = useState([{ title: '', year: '', duration: '', details: '' }]);
  const [educationData, setEducationData] = useState([{ level: '', year: '', details: '' }]);
  const [skillsData, setSkillsData] = useState([{ skillName: '', details: '' }]);
  const [hobbiesData, setHobbiesData] = useState([{ hobbyName: '', details: '' }]);

  const TabButton = ({ title, active, onClick }) => (
    <button className={`tab-button ${active ? 'active' : ''}`} onClick={onClick}>
      {title}
    </button>
  );
  
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
      <div className='tab-container'>
        <TabButton title="Experience" active={selectedTab === 'experience'} onClick={() => handleTabClick('experience')} />
        <TabButton title="Education" active={selectedTab === 'education'} onClick={() => handleTabClick('education')} />
        <TabButton title="Skills" active={selectedTab === 'skills'} onClick={() => handleTabClick('skills')} />
        <TabButton title="Hobbies" active={selectedTab === 'hobbies'} onClick={() => handleTabClick('hobbies')} />
      </div>
      {selectedTab === 'experience' && <ExperienceSection data={experienceData} onAdd={handleAddExperience} onRemove={handleRemoveExperience} />}
      {selectedTab === 'education' && <EducationSection data={educationData} onAdd={handleAddEducation} onRemove={handleRemoveEducation} />}
      {selectedTab === 'skills' && <SkillsSection data={skillsData} onAdd={handleAddSkill} onRemove={handleRemoveSkill} />}
      {selectedTab === 'hobbies' && <HobbiesSection data={hobbiesData} onAdd={handleAddHobby} onRemove={handleRemoveHobby} />}
    </div>
     );
    };

export default ProfileForm;









  

     