// Navbar.js
import React from 'react';
import { Instagram, Youtube, Twitter, Facebook, Rss } from 'lucide-react';
import './Styles/Navbar.css'; // Import the CSS file
import { useLocation, Link } from "react-router-dom";
import image from '../Images/maya-bell-nav-logo.png';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

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
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about-us" className={`nav-link ${isActive('/about-us') ? 'active' : ''}`}>About</Link>
          <Link to="/art" className={`nav-link ${isActive('/art') ? 'active' : ''}`}>Arts</Link>
          <Link to="/animation" className={`nav-link ${isActive('/animation') ? 'active' : ''}`}>Animations</Link>
        </div>
        
        {/* Social Media Icons */}
        <div className="navbar-social">
          <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv" className="social-link" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv" className="social-link" aria-label="YouTube">
            <Youtube size={18} />
          </a>
          <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv" className="social-link" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv" className="social-link" aria-label="Facebook">
            <Facebook size={18} />
          </a>
          <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv" className="social-link" aria-label="RSS Feed">
            <Rss size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;