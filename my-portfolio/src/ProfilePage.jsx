import React from 'react';
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
          <h3>Profile Details</h3>
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
         <label htmlFor="nationality">Nationality:</label>
         <select id="nationality">
           <option value="USA">USA</option>
           <option value="Canada">Canada</option>
           {/* Add more options as needed */}
         </select>
       </li>
<       li>
         <label htmlFor="work-visa">Work Visa:</label>
         <select id="work-visa">
           <option value="H1B">H1B</option>
           <option value="L1">L1</option>
           {/* Add more options as needed */}
         </select>
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
            <label htmlFor="work-visa">Work Visa:</label>
            <select id="work-visa">
              <option value="H1B">H1B</option>
              <option value="L1">L1</option>
              {/* Add more options as needed */}
            </select>
          </li>
          </ol>
          </div>
      <div className="contact-details">
        <div className="top-profile-heading">
          <h3>Contact Details / Other Sites</h3>
          <button className="edit-button" onClick={handleEditContact}>
            Edit
          </button>
        </div>
        <p>Email: example@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        {/* Add more contact details as needed */}
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




   