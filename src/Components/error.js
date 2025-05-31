import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Error.css';

const Error = () => {
  const [glitchText, setGlitchText] = useState('Something Went Off Script...');
  const [isVisible, setIsVisible] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);

  const rotatingIcons = ['🎲', '🎰', '🃏', '🎮', '🎯'];

  useEffect(() => {
    const glitchTexts = [
      'Something Went Off Script...',
      'S0m3th1ng W3nt 0ff Scr1pt...',
      '5om3th1ng W3n7 0ff 5cr1p7...',
      'Something Went Off Script...'
    ];
  
    setIsVisible(true);
  
    const glitchInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * glitchTexts.length);
      setGlitchText(glitchTexts[randomIndex]);
  
      setTimeout(() => {
        setGlitchText(glitchTexts[0]);
      }, 150);
    }, 3000);
  
    const iconInterval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % rotatingIcons.length);
    }, 2000);
  
    return () => {
      clearInterval(glitchInterval);
      clearInterval(iconInterval);
    };
  }, [rotatingIcons.length]);

  return (
    <div className="error-page">
      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      <div className={`error-container ${isVisible ? 'fade-in' : ''}`}>
        {/* Main Icon */}
        <div className="main-icon">
          <span className="rotating-icon">{rotatingIcons[currentIcon]}</span>
        </div>

        {/* Header */}
        <div className="error-header">
          <h1 className="glitch-text" data-text={glitchText}>
            {glitchText}
          </h1>
          <div className="error-subtitle">
            <span className="emoji">😵‍💫</span>
            <span>This page isn't dealing the right cards...</span>
          </div>
        </div>

        {/* Content Sections */}
        <div className="error-content">
          <div className="reason-section">
            <p className="intro-text">But don't worry, it's either:</p>
            <ul className="reason-list">
              <li>
                <span className="bullet">🧬</span>
                A glitch in the matrix
              </li>
              <li>
                <span className="bullet">🎨🛠️</span>
                Or... we're still crafting something epic behind the scenes
              </li>
            </ul>
          </div>

          <div className="construction-section">
            <div className="construction-header">
              <span className="construction-icon">🏗️</span>
              <h2>Under Construction</h2>
            </div>
            <div className="construction-text">
              <p><strong>Wait!! New levels are loading...</strong></p>
              <p>Our devs and artists are hard at work brewing some magic. This page will be live soon with something worth the wait!</p>
            </div>
            <div className="progress-indicator">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <span className="progress-text">Crafting in progress...</span>
            </div>
          </div>

          <div className="actions-section">
            <div className="actions-header">
              <span className="actions-icon">🔁</span>
              <h3>In the Meantime...</h3>
            </div>
            <div className="action-cards">
              <Link to="/" className="action-card primary">
                <span className="card-icon">👈</span>
                <span className="card-text">Go back to Home</span>
              </Link>
              <Link to="/contact-us" className="action-card">
                <span className="card-icon">📩</span>
                <span className="card-text">Contact Us</span>
                <span className="card-subtitle">if you're looking for something specific</span>
              </Link>
              <div className="action-card">
              <Link to="/" className="action-card">
                <span className="card-icon">🎮</span>
                <span className="card-text">Check out our Featured Games</span>
                <span className="card-subtitle">they're ready to play!</span>
              </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Background animated shapes */}
      <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </div>
  );
};

export default Error;