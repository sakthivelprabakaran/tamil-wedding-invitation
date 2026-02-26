import React from 'react';
import TempleSVG from './SVGs/TempleSVG';
import ThoranamSVG from './SVGs/ThoranamSVG';
import KalasamSVG from './SVGs/KalasamSVG';
import KuthuVilakkuSVG from './SVGs/KuthuVilakkuSVG';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-thoranam">
        <ThoranamSVG />
      </div>
      <div className="hero-temple-bg">
        <TempleSVG isDark={true} />
      </div>
      <div className="vilakku-left">
        <KuthuVilakkuSVG className="vilakku-svg" />
      </div>
      <div className="vilakku-right">
        <KuthuVilakkuSVG className="vilakku-svg" />
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
