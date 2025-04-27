import React from 'react';
import '../App.css'; // for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro">
        <h1>Hello, I'm Veera Kishore Periyasamy</h1>
        <h2>Web Developer | Designer | Tech Enthusiast</h2>
        <p>
          I build modern, responsive web & mobile applications and bring ideas to life with clean code
          and beautiful design.
        </p>
        <div className="buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
      <div className="intro-image">
        <img src="your-photo.png" alt="Your Portrait" />
      </div>
    </div>
  );
};

export default Home;
