import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import JallikattuSVG from './SVGs/JallikattuSVG';
import KalasamSVG from './SVGs/KalasamSVG';
import YaliPillarSVG from './SVGs/YaliPillarSVG';
import SikkuKolamCornerSVG from './SVGs/SikkuKolamCornerSVG';
import './WeddingDetails.css';

const EventCard = ({ title, date, time, location, description }) => (
  <div className="event-card">
    <SikkuKolamCornerSVG position="top-left" className="kolam-corner tl" fill="var(--secondary-color)" />
    <SikkuKolamCornerSVG position="top-right" className="kolam-corner tr" fill="var(--secondary-color)" />
    <SikkuKolamCornerSVG position="bottom-left" className="kolam-corner bl" fill="var(--secondary-color)" />
    <SikkuKolamCornerSVG position="bottom-right" className="kolam-corner br" fill="var(--secondary-color)" />

    <div className="yali-left"><YaliPillarSVG fill="var(--secondary-color)" /></div>
    <div className="yali-right"><YaliPillarSVG fill="var(--secondary-color)" /></div>

    <div className="event-card-content">
      <h3>{title}</h3>
      <div className="event-info">
        <div className="info-item">
          <Calendar size={20} />
          <span>{date}</span>
        </div>
        <div className="info-item">
          <Clock size={20} />
          <span>{time}</span>
        </div>
        <div className="info-item">
          <MapPin size={20} />
          <span>{location}</span>
        </div>
      </div>
      <p className="description">{description}</p>
      <button className="btn map-btn">View Map</button>
    </div>
  </div>
);

const WeddingDetails = () => {
  return (
    <section className="wedding-details section-padding" id="events">
      <div className="wedding-jallikattu-bg">
        <JallikattuSVG opacity={0.05} fill="var(--secondary-color)" />
      </div>
      <div className="container">
        <div className="wedding-ornament">
          <KalasamSVG style={{ width: '50px', height: '70px' }} />
        </div>
        <h2 className="section-title text-light">Wedding Events</h2>

        <div className="events-grid">
          <EventCard
            title="Reception"
            date="March 25th, 2026"
            time="6:30 PM Onwards"
            location="[Venue Name, City]"
            description="Join us for an evening of music, dinner, and celebration."
          />

          <EventCard
            title="Muhurtham"
            date="March 25th, 2026"
            time="9:00 AM - 10:30 AM"
            location="[Venue Name, City]"
            description="The auspicious moment where we tie the knot."
          />
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
