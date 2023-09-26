import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './ProfilePage.css';
// import CountryList from './CountryList';
import ProfileForm from './ProfileForm';
import MediaUpload from './MediaUpload';


const ProfilePage = () => {
  const navigate = useNavigate();
  const [isEditingProfile, setIsEditingProfile] = useState(false);
const [isEditingContact, setIsEditingContact] = useState(false);
  const [fullNameInput, setFullNameInput] = useState("");
  const [nationalityInput, setNationalityInput] = useState(""); 
  const [workVisaInput, setWorkVisaInput] = useState(""); 
  const [authorizedUKInput, setAuthorizedUKInput] = useState(""); 
  const [relocateInput, setRelocateInput] = useState(""); 
  const [emailInput, setEmailInput] = useState(""); 
  const [phoneInput, setPhoneInput] = useState("");

  const handleBackToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const locationInput = document.getElementById('location');
  
    if (locationInput) {
      const autocomplete = new window.google.maps.places.Autocomplete(locationInput);
  
      
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
   
  };
  
  const handleEditContact = () => {
    setIsEditingContact(true);
  };
  
  const handleSaveContact = () => {
    setIsEditingContact(false);
    
  };

  function capitalizeFirstLetter(name) {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }


  // return (
  //   <div>
  //     <div>
  //       <Navbar onBackToHome={handleBackToHome}/>
  //     </div>
  //     <div className="profile-container">
  //       <div
  //         className="profile-photo"
  //         style={{
  //           backgroundImage: `url("${photoURL}")`,
  //           backgroundSize: 'cover',
  //           backgroundPosition: 'center',
  //         }}
  //         ></div>
  //         <input 
  //           type="text" 
  //           value={photoURL} 
  //           onChange={(e) => setPhotoURL(e.target.value)} 
  //           placeholder="Enter new image URL"
  //         />
    
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
      onChange={(e) => setFullNameInput(e.target.value.replace(/[^a-zA-Z\s'-]/g, ''))}
      readOnly={false}
    />
  ) : (
    <p className="professionalFont">{capitalizeFirstLetter(fullNameInput)}</p>
  )}
</li>
  

          {/* <CountryList /> */}
           <li>
            <label htmlFor="nationality">Nationality:</label>
            {isEditingProfile ? (
               <select
               id="nationality"
               name="nationality"
               placeholder="Enter your nationality"
               value={nationalityInput}
               onChange={(e) => setNationalityInput(e.target.value)}
               readOnly={!isEditingProfile}
             >
               <option value="" disabled selected>Select your nationality</option>
               <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="Brunei">Brunei</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cabo Verde">Cabo Verde</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Côte d'Ivoire">Côte d'Ivoire</option>
<option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Eswatini">Eswatini</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Greece">Greece</option>
<option value="Grenada">Grenada</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Honduras">Honduras</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Laos">Laos</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon">Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libya">Libya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia</option>
<option value="Moldova">Moldova</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montenegro">Montenegro</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="North Korea">North Korea</option>
<option value="North Macedonia">North Macedonia</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Palestine State">Palestine State</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Qatar">Qatar</option>
<option value="Romania">Romania</option>
<option value="Russia">Russia</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
<option value="Saint Lucia">Saint Lucia</option>
<option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option>
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Serbia">Serbia</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra Leone">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Korea">South Korea</option>
<option value="South Sudan">South Sudan</option>
<option value="Spain">Spain</option>
<option value="Sri Lanka">Sri Lanka</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syria</option>
<option value="Taiwan">Taiwan</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania</option>
<option value="Thailand">Thailand</option>
<option value="Timor-Leste">Timor-Leste</option>
<option value="Togo">Togo</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Vatican City">Vatican City</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Vietnam</option>
<option value="Yemen">Yemen</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>

              </select>
              ) : (
                <p className="professionalFont">{nationalityInput}</p>
              )}
            </li>
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
    <p className="professionalFont">{capitalizeFirstLetter(workVisaInput)}</p>
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
    <p className="professionalFont">{capitalizeFirstLetter(authorizedUKInput)}</p>
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
    <p className="professionalFont">{capitalizeFirstLetter(relocateInput)}</p>
  )}
</li>

          </ol>
          </div>
      <div className="contact-details">
      <div className="top-profile-heading">
  <h4>Contact Details / Other Sites</h4>
</div>
        <ol>
        <li>
        <label htmlFor="email">Email:</label>
{isEditingProfile ? (
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter email"
    value={emailInput}
    onChange={(e) => setEmailInput(e.target.value)}
    readOnly={!isEditingProfile}
  />
) : (
  <p className="professionalFont">{emailInput.toLowerCase()}</p>
)}
</li>
<li>
  <label htmlFor="phone">Phone Number:</label>
  {isEditingProfile ? (
 <input
 type="tel"
 id="phone"
 name="phone"
 pattern="[+0-9]*"
 placeholder="Enter phone number"
 value={phoneInput}
 onChange={(e) => setPhoneInput(e.target.value.replace(/[^\d+]/g, ''))}
 readOnly={!isEditingProfile}
/>
  ) : (
    <p className="professionalFont">{phoneInput}</p>
  )}
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
        {isEditingProfile ? (
  <button className="edit-button save" onClick={handleSaveProfile}>
    Save
  </button>
) : (
  <button className="edit-button edit" onClick={handleEditProfile}>
    Edit
  </button>
)}
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




   