import React from 'react';
import './Styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Where <span className="highlight">Art</span> and <span className="highlight">Tech</span> Collide
            </h1>
            <p className="hero-subtitle">
              Maya Bell is your premier partner in iGaming excellence, crafting immersive digital experiences 
              that captivate players and drive engagement across all platforms.
            </p>
          </div>
          <div className="hero-image">
            <div className="floating-card">
              <div className="card-glow"></div>
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop" alt="Gaming Technology" />
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-description">
                Founded on the principle that exceptional gaming experiences emerge from the perfect fusion 
                of artistic vision and cutting-edge technology, Maya Bell has established itself as a 
                leading force in the iGaming industry.
              </p>
              <p className="story-description">
                From concept to launch, we provide end-to-end solutions that transform creative ideas 
                into profitable gaming platforms. Our team of passionate developers, artists, and 
                strategists work tirelessly to push the boundaries of what's possible in digital gaming.
              </p>
              <div className="story-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Games Delivered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
              </div>
            </div>
            <div className="story-visual">
              <div className="visual-grid">
                <div className="visual-item">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop" alt="Development Process" />
                </div>
                <div className="visual-item">
                  <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop" alt="Gaming Art" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2 className="section-title centered">Complete iGaming Solutions</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-bg art-bg">🎨</div>
              </div>
              <h3 className="service-title">Artistic Excellence</h3>
              <p className="service-description">
                Stunning visual designs, character art, UI/UX interfaces, and immersive 
                game environments that captivate and engage players.
              </p>
              <ul className="service-features">
                <li>Character Design & Illustration</li>
                <li>UI/UX Design</li>
                <li>Game Environment Art</li>
                <li>Brand Identity Design</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <div className="icon-bg animation-bg">⚡</div>
              </div>
              <h3 className="service-title">Dynamic Animations</h3>
              <p className="service-description">
                Fluid animations, particle effects, and interactive elements that bring 
                your games to life with smooth, engaging motion.
              </p>
              <ul className="service-features">
                <li>2D/3D Character Animation</li>
                <li>Particle Effects & VFX</li>
                <li>UI Animation Systems</li>
                <li>Cinematic Sequences</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <div className="icon-bg tech-bg">⚙️</div>
              </div>
              <h3 className="service-title">Game Engine Development</h3>
              <p className="service-description">
                Custom game engines optimized for performance, scalability, and 
                cross-platform compatibility across all devices.
              </p>
              <ul className="service-features">
                <li>Custom Engine Architecture</li>
                <li>Cross-Platform Optimization</li>
                <li>Performance Analytics</li>
                <li>Scalable Backend Systems</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <div className="icon-bg full-bg">🎮</div>
              </div>
              <h3 className="service-title">Full Game Development</h3>
              <p className="service-description">
                Complete game development from concept to deployment, including 
                multiplayer systems, payment integration, and ongoing support.
              </p>
              <ul className="service-features">
                <li>End-to-End Development</li>
                <li>Multiplayer Integration</li>
                <li>Payment Gateway Setup</li>
                <li>Live Support & Updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title centered">Meet Our Expert Team</h2>
          <p className="team-intro">
            Our diverse team of creative professionals and technical experts work together 
            to deliver exceptional iGaming experiences.
          </p>
          <div className="team-categories">
            <div className="team-category">
              <div className="category-icon">💻</div>
              <h3>Developers</h3>
              <p>Full-stack developers specializing in game engines, backend systems, and platform integration.</p>
            </div>
            <div className="team-category">
              <div className="category-icon">🎨</div>
              <h3>Artists</h3>
              <p>Creative visionaries crafting stunning game art, character designs, and immersive environments.</p>
            </div>
            <div className="team-category">
              <div className="category-icon">🎬</div>
              <h3>Animators</h3>
              <p>Motion graphics experts bringing games to life with fluid animations and dynamic effects.</p>
            </div>
            <div className="team-category">
              <div className="category-icon">🎯</div>
              <h3>Strategists</h3>
              <p>Gaming industry experts ensuring your project meets market demands and player expectations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-content">
            <div className="why-text">
              <h2 className="section-title">Why Choose Maya Bell?</h2>
              <div className="advantage-list">
                <div className="advantage-item">
                  <div className="advantage-icon">🚀</div>
                  <div className="advantage-content">
                    <h4>Rapid Development</h4>
                    <p>Agile methodologies ensure fast delivery without compromising quality.</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">🔧</div>
                  <div className="advantage-content">
                    <h4>Custom Solutions</h4>
                    <p>Tailored approaches that fit your specific business needs and vision.</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">📱</div>
                  <div className="advantage-content">
                    <h4>Cross-Platform</h4>
                    <p>Games that work seamlessly across desktop, mobile, and web platforms.</p>
                  </div>
                </div>
                <div className="advantage-item">
                  <div className="advantage-icon">🎯</div>
                  <div className="advantage-content">
                    <h4>Market Focus</h4>
                    <p>Deep understanding of iGaming trends and player preferences.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-visual">
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Something Amazing?</h2>
            <p>Let's discuss your next iGaming project and bring your vision to life.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Start Your Project</button>
              <button className="btn-secondary">View Our Portfolio</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;