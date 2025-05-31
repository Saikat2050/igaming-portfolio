// Navbar.js
import React from 'react';
import { Instagram, Youtube, Twitter, Facebook, Rss } from 'lucide-react';
import './Styles/Navbar.css'; // Import the CSS file
import { Link } from "react-router-dom";
import image from '../Images/maya-bell-nav-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <img 
            src={image}
            alt="Maya Bell" 
            className="logo-image"
          />
        </div>
        
        {/* Spacer for responsive layout */}
        <div className="navbar-spacer"></div>
        
        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about-us" className="nav-link">About</Link>
          <Link to="/art" className="nav-link">Arts</Link>
          <Link to="/animation" className="nav-link">Animations</Link>
        </div>
        
        {/* Social Media Icons */}
        <div className="navbar-social">
          <a href="#" className="social-link" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="#" className="social-link" aria-label="YouTube">
            <Youtube size={18} />
          </a>
          <a href="#" className="social-link" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="#" className="social-link" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="#" className="social-link" aria-label="RSS Feed">
            <Rss size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;