import React from 'react';
import KolamCorners from './KolamCorners';
import './Story.css';

const Story = () => {
  return (
    <section className="story section-padding">
      <KolamCorners size={80} opacity={0.35} offset={12} />
      <div className="container">
        <h2 className="section-title">Our Story</h2>
        <div className="story-content">
          <div className="story-image">
            <div className="placeholder-img">Couple Photo</div>
          </div>
          <div className="story-text">
            <h3>How We Met</h3>
            <p>
              Destiny brought us together. What started as a simple conversation blossomed into a beautiful friendship and now, a lifelong promise. We are excited to embark on this new chapter of our lives together, surrounded by our loved ones.
            </p>
            <p>
              We can't wait to celebrate our special day with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
