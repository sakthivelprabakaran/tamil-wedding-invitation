import React, { useState } from 'react';
import './RSVP.css';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    guests: 1,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('RSVP Data:', formData);
    setSubmitted(true);
  };

  return (
    <section className="rsvp section-padding" id="rsvp">
      <div className="container">
        <h2 className="section-title">RSVP</h2>
        <div className="rsvp-form-container">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="rsvp-form">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Number of Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                >
                  {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>Message <span className="optional">(Optional)</span></label>
                <textarea
                  rows="4"
                  placeholder="Write a message for the couple..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn">Confirm Attendance</button>
            </form>
          ) : (
            <div className="success-message">
              <h3>Thank You</h3>
              <p>We are excited to see you there.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RSVP;
