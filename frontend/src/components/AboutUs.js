import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1); // Go back only if there is history
    }
  };
  
  return (
    <div className="about-wrapper">
      <div className="back-button-container">
      <button 
        onClick={handleBack} 
        className="back-button"
        disabled={window.history.length <= 2}
      >
        Back
      </button>
    </div>
      <h1 className="about-title">About EduXchange</h1>
      <div className="about-container">
        <p className="about-description">
          EduXchange is a dynamic academic platform dedicated to empowering students by providing
          free and accessible resources for competitive exam preparation. We cover a wide range of
          major exams, including UPSC, GATE, CAT, SSC, Banking, Railway, JEE, and NEET, ensuring that
          students have access to real-time updates, previous year question papers, mock tests, expert
          mentorship, and a dedicated academic resale marketplace.
        </p>
      </div>
      
      <div className="about-container">
        <p className="about-mission">
          Our core mission is to eliminate financial barriers in education and create an inclusive
          learning ecosystem where knowledge is shared, not sold. Unlike traditional platforms that
          impose high costs on essential study materials, EduXchange is committed to serving all
          students equally, ensuring that quality education remains within reach for everyone.
        </p>
      </div>
      
      <div className="about-container">
        <blockquote className="about-quote">
          “Education is the most powerful weapon which you can use to change the world.”
        </blockquote>
      </div>
    </div>
  );
};

export default AboutUs;
