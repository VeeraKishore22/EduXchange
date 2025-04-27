import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const ContactUs = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1); // Go back only if there is history
    }
  };

  return (
    <div className="contact-container">
       <div className="back-button-container">
      <button 
        onClick={handleBack} 
        className="back-button"
        disabled={window.history.length <= 2}
      >
        Back
      </button>
    </div>
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        For any queries, support, or collaboration opportunities, feel free to reach out to us:
      </p>

      <div className="contact-details">
        <p className="contact-info">
          <strong>Email:</strong> <a href="mailto:support@eduxchange.com">support@eduxchange.com</a>
        </p>
        <p className="contact-info"><strong>Phone:</strong> +91 XXXXXXXXXX</p>
        <p className="contact-info"><strong>Address:</strong> EduXchange, Chennai, India</p>
      </div>

      <h2 className="contact-section-title">Follow Us</h2>
      <p className="contact-description">You can also follow us on social media for the latest updates:</p>

      <div className="social-links">
        <p>
          <strong>Facebook:</strong> <a href="https://facebook.com/eduxchange">facebook.com/eduxchange</a>
        </p>
        <p>
          <strong>Twitter (X):</strong> <a href="https://twitter.com/eduxchange">twitter.com/eduxchange</a>
        </p>
        <p>
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/company/eduxchange">linkedin.com/company/eduxchange</a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
