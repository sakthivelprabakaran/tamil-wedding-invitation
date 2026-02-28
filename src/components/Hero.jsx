import React from 'react';
import Glitter from './Glitter';
import BananaTreeSVG from './SVGs/BananaTreeSVG';
import ThoranamSVG from './SVGs/ThoranamSVG';
import './Hero.css';

/**
 * Splits text into individual letter spans for per-letter hover animation.
 */
const AnimatedText = ({ text, className }) => {
  return (
    <h1 className={className}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="hero-letter"
          style={{ '--i': i, animationDelay: `${i * 0.04}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </h1>
  );
};

const Hero = () => {
  return (
    <section className="hero glitter-bg">
      <Glitter count={35} stars={0} />

      {/* Mango leaf thoranam at the top */}
      <div className="hero-thoranam">
        <ThoranamSVG />
      </div>

      {/* Banana tree illustrations — left and right */}
      <div className="hero-banana-left">
        <BananaTreeSVG />
      </div>
      <div className="hero-banana-right">
        <BananaTreeSVG isFlipped />
      </div>

      <div className="hero-content">
        <p className="hero-subtitle">We're Getting Married</p>

        <div className="hero-ornament">
          <div className="hero-ornament-line"></div>
          <div className="hero-ornament-diamond"></div>
          <div className="hero-ornament-line"></div>
        </div>

        <AnimatedText text="Sakthivel Prabakaran" className="hero-name" />
        <span className="hero-ampersand">&</span>
        <AnimatedText text="Vivitha" className="hero-name" />

        <div className="hero-ornament">
          <div className="hero-ornament-line"></div>
          <div className="hero-ornament-diamond"></div>
          <div className="hero-ornament-line"></div>
        </div>

        <p className="hero-date-label">Save the Date</p>
        <p className="hero-date">March 25, 2026</p>
      </div>
      <div className="scroll-indicator">
        <span>&#8964;</span>
      </div>
    </section>
  );
};

export default Hero;
