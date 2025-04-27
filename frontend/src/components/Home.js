import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import mainImage from "../components/images/main1.jpg";
import compExam from "../components/images/compExam2.jpeg";
import marketPlace from "../components/images/download.jpeg";
import StudyMaterial from "../components/images/StudyMaterial.jpg";
import MockTest from "../components/images/MockTest.png"; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to EduXchange</h1>
          <div class="hero-description-container">
          <p className="hero-description">
          Where knowledge meets opportunity and dreams turn into reality! At EduXchange, we believe that education is not just about learning—it’s about empowerment, growth, and breaking barriers. 
          No  limited access to resources.Chase your ambitions, push beyond limits, and take charge of your future—because education should empower, not restrict. 
          This is your journey, and it starts here!
          </p>
          </div>
        </div>
        <div class="hero-image-container">
        <div className="hero-image">
          <img src={mainImage} alt="Main Hero" />
          </div>
        </div>
      </section>

      <section className="categories-section">
        {/* <h2 className="categories-title">SERVICES</h2> */}
        <div className="categories-container">
          <div className="category-card" onClick={() => navigate("/comp-exam")}>
            <img src={compExam} alt="Competitive Exam" className="category-image" />
            <h3 className="category-name">Competitive Exams</h3>
          </div>

          <div className="category-card" onClick={() => navigate("/Market")}>
            <img src={marketPlace} alt="Marketplace" className="category-image" />
            <h3 className="category-name">Resale Marketplace</h3>
          </div>

          <div className="category-card" onClick={() => navigate("/Material")}>
            <img src={StudyMaterial} alt="Study Material" className="category-image" />
            <h3 className="category-name">Study Materials</h3>
          </div>

          <div className="category-card" onClick={() => navigate("/MockTest")}>
            <img src={MockTest} alt="Mock Test" className="category-image" />
            <h3 className="category-name">Mock Test</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
