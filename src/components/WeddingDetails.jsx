import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import './WeddingDetails.css';

const EventCard = ({ title, date, time, location, description }) => (
  <div className="event-card">
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
);

const WeddingDetails = () => {
  return (
    <section className="wedding-details section-padding" id="events">
      <div className="container">
        <h2 className="section-title">Wedding Events</h2>

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
