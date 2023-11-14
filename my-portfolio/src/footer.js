import React from 'react';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} B'K Rights reserved.</p>
    </footer>
  );
};

export default Footer;