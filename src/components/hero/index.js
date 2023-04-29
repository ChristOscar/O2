import React from "react";
import "./Hero.css"; // Import the CSS file for styling
import hiking from '../../images/hiking.jpg'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={hiking} alt="Hiking" />
      </div>
      <div className="hero-text">
        <h1 className="hero-title">Outdoorsy</h1>
        
      </div>
    </div>
  );
}

export default Hero;