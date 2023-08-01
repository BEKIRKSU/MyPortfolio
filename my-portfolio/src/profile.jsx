import React from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css'; // Import the CSS file with the styles from the previous example
import ProfileForm from './ProfileForm';
import MediaUpload from './MediaUpload';

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div>
    <div class="name-area">
        <h2>NAME SURNAME</h2>
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
        <h2>Profile Details</h2>
        <ul>
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
          <li>
            <label htmlFor="dob">Date of Birth:</label>
            <input type="date" id="dob" />
          </li>
          {/* Add more details as needed */}
        </ul>
      </div>
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Email: example@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        {/* Add more contact details as needed */}
      </div>
      <div className="back-to-home">
        <button onClick={handleBackToHome}>Back to Home</button>
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




   