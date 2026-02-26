import React from 'react';
import { Heart } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="sub-heading">We are getting married!</p>
        <h1 className="couple-name">Sakthivel Prabakaran</h1>
        <div className="heart-icon">
          <Heart fill="#D4AF37" color="#D4AF37" size={48} />
        </div>
        <h1 className="couple-name">Vivitha</h1>
        <p className="date">Save the Date</p>
        <p className="date-placeholder">March 25th, 2026</p>
        <div className="scroll-indicator">
          <span>&#8595;</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
