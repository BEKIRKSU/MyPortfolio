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
  <h4>Profile Detail</h4>
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
                readOnly={false} 
              />
            ) : (
              <p>{fullNameInput}</p>
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
                <option value="AF">Afghanistan</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BR">Brazil</option>
                <option value="BN">Brunei</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="CV">Cabo Verde</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CR">Costa Rica</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="CI">Côte d'Ivoire</option>
                <option value="CD">Democratic Republic of the Congo</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="SZ">Eswatini</option>
                <option value="ET">Ethiopia</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GR">Greece</option>
                <option value="GD">Grenada</option>
                <option value="GT">Guatemala</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HN">Honduras</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Laos</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia</option>
                <option value="MD">Moldova</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="KP">North Korea</option>
                <option value="MK">North Macedonia</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestine State</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="QA">Qatar</option>
                <option value="RO">Romania</option>
                <option value="RU">Russia</option>
                <option value="RW">Rwanda</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="KR">South Korea</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syria</option>
                <option value="TW">Taiwan</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VA">Vatican City</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Vietnam</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
              ) : (
                <p>{nationalityInput}</p>
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
  {/* {isEditingContact ? (
    <button className="edit-button" onClick={handleSaveContact}>
      Save
    </button>
  ) : (
    <button className="edit-button" onClick={handleEditContact}>
      Edit
    </button>
  )} */}
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
    <p>{emailInput}</p>
  )}
</li>
<li>
  <label htmlFor="phone">Phone Number:</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
    placeholder="Enter phone number"
    value={phoneInput}
    onChange={(e) => setPhoneInput(e.target.value)}
    readOnly={!isEditingProfile}
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




   