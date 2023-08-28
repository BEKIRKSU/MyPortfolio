import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './ProfilePage.css';
import CountryList from './CountryList';
import ProfileForm from './ProfileForm';
import MediaUpload from './MediaUpload';


const ProfilePage = () => {
  const navigate = useNavigate();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [fullNameInput, setFullNameInput] = useState("");
  const [workVisaInput, setWorkVisaInput] = useState(""); // Add this line
  const [authorizedUKInput, setAuthorizedUKInput] = useState(""); // Add this line
  const [relocateInput, setRelocateInput] = useState(""); 

  const handleBackToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const locationInput = document.getElementById('location');
  
    if (locationInput) {
      const autocomplete = new window.google.maps.places.Autocomplete(locationInput);
  
      // Listen for place_changed event to get selected location
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place && place.formatted_address) {
          console.log('Selected location:', place.formatted_address);
        }
      });
    }
  }, []);

  const handleEditProfile = () => {
    setIsEditingProfile(true);
  };

  const handleSaveProfile = () => {
    setIsEditingProfile(false);
    // Add logic to save profile details
  };

  const handleEditContact = () => {
    setIsEditingContact(true);
  };

   const handleSaveContact = () => {
    setIsEditingContact(false);
    // Add logic to save contact details
  };

  return (
    <div>
      <div>
      <Navbar onBackToHome={handleBackToHome}/>
      </div>
    <div className="profile-container">
     <div
        className="profile-photo"
        style={{
          backgroundImage:
            'url("https://media.gettyimages.com/id/73635897/photo/manchester-united-kingdom-manchester-uniteds-cristiano-ronaldo-celebrates-scoring-from-the.jpg?s=612x612&w=gi&k=20&c=cv_-zHdBoBkj57jpHEBkIIDNcblr_FOeIpsRVA1mZQw=")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
      <div className="details-container">
      <div className="top-profile-heading">
  <h4>Profile Details</h4>
  {isEditingProfile ? (
    <button className="edit-button" onClick={handleSaveProfile}>
      Save
    </button>
  ) : (
    <button className="edit-button" onClick={handleEditProfile}>
      Edit
    </button>
  )}
</div>
        <ol>
        <li>
            <label htmlFor="full-name">Full Name:</label>
            {isEditingProfile ? (
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Enter your full name"
                value={fullNameInput}
                onChange={(e) => setFullNameInput(e.target.value)}
                readOnly={false} // Input is editable when editing profile
              />
            ) : (
              <p>{fullNameInput}</p>
            )}
          </li>
  

          <CountryList />
          <li>
  <label htmlFor="work-visa">Do you have a valid work visa for the UK?</label>
  {isEditingProfile ? (
    <select
      id="work-visa"
      value={workVisaInput}
      onChange={(e) => setWorkVisaInput(e.target.value)}
    >
      <option value="" disabled>Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  ) : (
    <p>{workVisaInput}</p>
  )}
</li>
<li>
  <label htmlFor="authorized-uk">Are you legally authorized to work in the UK?</label>
  {isEditingProfile ? (
    <select
      id="authorized-uk"
      value={authorizedUKInput}
      onChange={(e) => setAuthorizedUKInput(e.target.value)}
    >
      <option value="" disabled>Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  ) : (
    <p>{authorizedUKInput}</p>
  )}
</li>
<li>
  <label htmlFor="relocate">Are you willing to relocate if necessary?</label>
  {isEditingProfile ? (
    <select
      id="relocate"
      value={relocateInput}
      onChange={(e) => setRelocateInput(e.target.value)}
    >
      <option value="" disabled>Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  ) : (
    <p>{relocateInput}</p>
  )}
</li>

          </ol>
          </div>
      <div className="contact-details">
        <div className="top-profile-heading">
          <h4>Contact Details / Other Sites</h4>
          {isEditingContact ? (
              <button className="edit-button" onClick={handleSaveContact}>
                Save
              </button>
            ) : (
              <button className="edit-button" onClick={handleEditContact}>
                Edit
              </button>
            )}
        </div>
        <ol>
        <li>
        <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              autoComplete="off"
              readOnly={!isEditingContact} // Add readOnly attribute based on editing mode
            />
</li>
<li>
  <label htmlFor="phone">Phone Number:</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Add a pattern for phone number format
    placeholder="Enter phone number"
    autoComplete="off"
  />
</li>
<li>
    <label>Other profiles:</label>
    <div className="social-icons">
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <img className="website-link" src="https://media.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_200_200/0/1638831589865?e=2147483647&v=beta&t=Zq1zixRFUNMSm2Ldgu_hcJAYTL1gWG3VHKXO4kf9lDQ" alt="LinkedIn" />
      </a>
      <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
        <img className="website-link" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="GitHub" />
      </a>
    </div>
  </li>
        </ol>
      </div>
    </div>
    <div className="body-of-CV">
          <div>
            <ProfileForm />
            <MediaUpload />
          </div>
    </div>
    </div>
  );

      };
export default ProfilePage;




   