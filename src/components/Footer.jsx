import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="aayiramKaalam">
          <p className="aayiramTamil">ஆயிரம் காலத்துப் பயிர்</p>
          <p className="aayiramMeaning">A marriage is a harvest for a thousand years</p>
        </div>
        <p className="hashtag">#SakthiWedsVivitha</p>
        <p className="copyright">With Love &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
