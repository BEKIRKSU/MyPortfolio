import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './profile-page.css';
import ProfileForm from './ProfileForm';
import MediaUpload from './MediaUpload';
import Footer from './Footer';


const ProfilePage = () => {
  const navigate = useNavigate();

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
    // Define the logic for editing profile details
    // For example, navigate to an edit page or show a form/modal
  };

  const handleEditContact = () => {
    // Define the logic for editing contact details
    // For example, navigate to an edit page or show a form/modal
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
        {/* Add your profile photo here */}
      </div>
      <div className="details-container">
        <div className="top-profile-heading">
          <h4>Profile Details</h4>
          <button className="edit-button" onClick={handleEditProfile}>
            Edit
          </button>
        </div>
        <ol>
        <li>
  <label htmlFor="full-name">Full Name:</label>
  <input type="text" id="full-name" name="full-name" placeholder="Enter your full name"/>
</li>
<li>
  <label htmlFor="location">Location:</label>
  <input
    type="text"
    id="location"
    name="location"
    placeholder="Enter your location"
    autoComplete="off" 
  />
</li>
          <li>
         <label htmlFor="nationality">Nationality:</label>
         <select id="nationality">
           <option value="USA">USA</option>
           <option value="Canada">Canada</option>
           {/* Add more options as needed */}
         </select>
       </li>
       <li>
  <label htmlFor="work-visa">Do you have a valid work visa for the UK?</label>
  <select id="work-visa">
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>
</li>
<li>
  <label htmlFor="authorized-uk">Are you legally authorized to work in the UK?</label>
  <select id="authorized-uk">
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>
</li><li>
  <label htmlFor="relocate">Are you willing to relocate if necessary?</label>
  <select id="relocate">
    <option value="yes">Yes</option>
    <option value="no">No</option>
  </select>
</li>
          </ol>
          </div>
      <div className="contact-details">
        <div className="top-profile-heading">
          <h4>Contact Details / Other Sites</h4>
          <button className="edit-button" onClick={handleEditContact}>
            Edit
          </button>
        </div>
        <ol>
        <li>
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter your email address"
    autoComplete="off"
  />
</li>
<li>
  <label htmlFor="phone">Phone Number:</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" // Add a pattern for phone number format
    placeholder="Enter your phone number"
    autoComplete="off"
  />
</li>
        </ol>
      </div>
    </div>
    <div className="body-of-CV">
          <div>
            <ProfileForm />
            <MediaUpload />
            <Footer />
          </div>
    </div>
    </div>
  );

      };
export default ProfilePage;




   