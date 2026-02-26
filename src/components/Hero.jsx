import React from 'react';
import TempleSVG from './SVGs/TempleSVG';
import KalasamSVG from './SVGs/KalasamSVG';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-thoranam">
        <img src="/gold_mandapam_border.png" alt="Mandapam Border" className="mandapam-border-img" />
      </div>
      <div className="hero-temple-bg">
        <TempleSVG isDark={true} />
      </div>
      <div className="vilakku-left">
        <img src="/gold_kuthu_vilakku.png" alt="Vilakku" className="vilakku-img" />
      </div>
      <div className="vilakku-right">
        <img src="/gold_kuthu_vilakku.png" alt="Vilakku" className="vilakku-img" />
      </div>
      <div className="hero-content">
        <p className="sub-heading">We are getting married!</p>
        <h1 className="couple-name">Sakthivel Prabakaran</h1>
        <div className="hero-ornament">
          <KalasamSVG style={{ width: '40px', height: '60px' }} />
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
