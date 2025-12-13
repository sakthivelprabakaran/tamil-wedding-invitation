import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="hashtag">#SakthiWedsVivitha</p>
        <p className="copyright">With Love &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
