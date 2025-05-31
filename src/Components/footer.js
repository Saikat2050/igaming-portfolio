import React from "react";
import "./Styles/Footer.css";
import { Instagram, Youtube, Twitter, Facebook, Rss, Send } from "lucide-react";
import { Link } from "react-router-dom";
// import image from "../Images/maya-bell-nav-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <div className="footer-logo">
              {/* <img src={image} alt="Maya Bell" className="logo-image" /> */}
              <h3>maya<span className="logo-accent">bell</span></h3>
            </div>
            <p className="footer-description">
              Where art and technology collide to create extraordinary gaming
              experiences and digital innovations.
            </p>
            <div className="social-links">
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
              <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv" className="social-link" aria-label="RSS">
                <Rss size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="footer-section">
            <h4 className="footer-title">Navigate</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/art">Arts</Link>
              </li>
              <li>
                <Link to="/animation">Animations</Link>
              </li>
            </ul>
          </div>

          {/* Games Section */}
          <div className="footer-section">
            <h4 className="footer-title">Featured Games</h4>
            <ul className="footer-links">
              <li>
                <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv">Bet Arena</a>
              </li>
              <li>
                <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv">Aqua Gaming</a>
              </li>
              <li>
                <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv">Ghostfather Awakened</a>
              </li>
              <li>
                <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv">Gang Boss</a>
              </li>
              <li>
                <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv">Jungle Beast</a>
              </li>
            </ul>
          </div>

          {/* Contact & Info Section */}
          <div className="footer-section">
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="footer-links">
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/under-constructions">Support</Link>
              </li>
              <li>
                <Link to="/under-constructions">Newsletter</Link>
              </li>
              <li>
                <Link to="/under-constructions">Careers</Link>
              </li>
              <li>
                <Link to="/under-constructions">Press Kit</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-section newsletter-section">
            <h4 className="footer-title">Stay Updated</h4>
            <p className="newsletter-text">
              Get the latest game releases and tech updates
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                {/* <i className="fas fa-arrow-right"></i> */}
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Maya Bell. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv">Privacy Policy</a>
              <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv">Terms of Service</a>
              <a href="https://lottiefiles.com/free-animation/404-error-lottie-animation-A4rp5gxeyv">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-glow"></div>
      <div className="footer-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </footer>
  );
};

export default Footer;
