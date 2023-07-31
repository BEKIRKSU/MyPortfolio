import React from 'react';
import "./profile.css"
const Profile = () => {
  return (
    <div className="profile-modal">
    <div className="profile-header">
      <div className="name-placeholder">John Doe</div>
    </div>
    <h2>Profile Information</h2>
    <div className="profile-content">
      <div className="profile-picture">
        <img src="profile_picture.jpg" alt="Profile" />
      </div>
      <div className="basic-info">
        <h3>Basic Information</h3>
        <p>
          <strong>Date of Birth:</strong> January 1, 1990
          <br />
          <strong>Location:</strong> New York City, USA
        </p>
      </div>
      <div className="about-me">
        <h3>About Me</h3>
        <p>
          Hi there! I'm a passionate software engineer with a keen interest in web development.
          I love creating elegant and efficient solutions to real-world problems.
          In my free time, I enjoy hiking, reading, and playing the guitar.
        </p>
      </div>
      <div className="education">
        <h3>Education</h3>
        <p>
          <strong>University:</strong> XYZ University
          <br />
          <strong>Degree:</strong> Bachelor of Science in Computer Science
          <br />
          <strong>Graduation Year:</strong> 2012
        </p>
      </div>
      <div className="work-experience">
        <h3>Work Experience</h3>
        <p>
          <strong>Software Engineer, ABC Tech:</strong> (2012 - Present)
          <br />
          As a software engineer at ABC Tech, I have been involved in developing and maintaining
          various web applications. My responsibilities include front-end and back-end development,
          code optimization, and collaborating with cross-functional teams to deliver high-quality products.
        </p>
        <p>
          <strong>Web Developer, XYZ Solutions:</strong> (2010 - 2012)
          <br />
          During my time at XYZ Solutions, I worked on multiple client projects, creating user-friendly
          and responsive websites. This experience honed my skills in HTML, CSS, and JavaScript.
        </p>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>
      </div>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>
          <strong>Email:</strong> john.doe@example.com
          <br />
          <strong>LinkedIn:</strong> linkedin.com/in/johndoe
          <br />
          <strong>GitHub:</strong> github.com/johndoe
        </p>
      </div>
    </div>
  </div>
  
  );
};

export default Profile;







