import React from 'react';
import FloatingHearts from './FloatingHearts';
import BananaTreeSVG from './SVGs/BananaTreeSVG';
import ThoranamSVG from './SVGs/ThoranamSVG';
import KolamCorners from './KolamCorners';
import { publicUrl } from '../utils/publicUrl';
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
      <FloatingHearts count={12} />

      {/* Kolam corner decorations at all 4 corners */}
      <KolamCorners size={100} opacity={0.4} offset={16} />

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

      {/* Temple Gopuram — centered background decoration */}
      <div className="hero-temple">
        <img src={publicUrl('/temple_gopuram Background Removed.png')} alt="" aria-hidden="true" />
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
    </section >
  );
};

export default Hero;
