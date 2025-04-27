import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./App.css"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">© {new Date().getFullYear()} EduXchange. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://facebook.com/eduxchange" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
          </a>
          <a href="https://twitter.com/eduxchange" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="social-icon twitter" />
          </a>
          <a href="https://linkedin.com/company/eduxchange" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
