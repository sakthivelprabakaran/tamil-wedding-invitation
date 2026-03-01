import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import KolamCorners from './KolamCorners';
import './WeddingDetails.css';

const EventCard = ({ title, date, time, location, description, mapLink }) => (
  <div className="event-card">
    <h3>{title}</h3>
    <div className="event-info">
      <div className="info-item">
        <Calendar size={16} />
        <span>{date}</span>
      </div>
      <div className="info-item">
        <Clock size={16} />
        <span>{time}</span>
      </div>
      <div className="info-item">
        <MapPin size={16} />
        <span>{location}</span>
      </div>
    </div>
    <p className="description">{description}</p>
    <a href={mapLink} target="_blank" rel="noopener noreferrer" className="btn map-btn">Get Directions</a>
  </div>
);

const WeddingDetails = () => {
  return (
    <section className="wedding-details section-padding" id="events">
      <KolamCorners size={80} opacity={0.35} offset={12} />
      <div className="container">
        <h2 className="section-title">Wedding Events</h2>

        <div className="events-grid single-event">
          <EventCard
            title="Muhurtham"
            date="March 25, 2026 (Wednesday)"
            time="9:30 AM - 10:30 AM"
            location="KPR.Merina Mahal, Thirumana mandapam, Melapattu, Aranthangi"
            description="The auspicious moment where we tie the knot. Your presence is our greatest blessing."
            mapLink="https://www.google.com/maps/dir/?api=1&destination=KPR+Merina+Mahal+Aranthangi"
          />
        </div>

        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?q=KPR%20Merina%20Mahal,%20Aranthangi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KPR.Merina Mahal Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
