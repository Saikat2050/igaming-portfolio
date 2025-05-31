import React, { useState, useEffect } from "react";
import "./Styles/Home.css"; // Import the CSS file
import image1 from "../Images/3d-cartoon-rendering-person-playing-casino (1).jpg";
import image2 from "../Images/3d-cartoon-rendering-person-playing-casino (2).jpg";
import image3 from "../Images/3d-cartoon-rendering-person-playing-casino (5).jpg";
import image4 from "../Images/3d-cartoon-rendering-person-playing-casino (7).jpg";
import image11 from "../Images/slot-1-bet-arena.jpg";
import image12 from "../Images/slot-2-police-chase.jpg";
import image13 from "../Images/slot-3-eltro-casino.jpg";
import image14 from "../Images/blackjack-1-forever-together.jpg";
import image15 from "../Images/blackjack-2-jungle-beast.jpg";
import image16 from "../Images/rolulette-1-business.jpg";
import image17 from "../Images/casino-1-gang-boss.jpg";
import image18 from "../Images/casino-2-aqua-gaming.jpg";
import image19 from "../Images/casoni-3-beach-game.jpg";
import image20 from "../Images/slot-4-modern-gods.jpg";
import image21 from "../Images/poker-1-godfather-awakening.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel data
  const carouselImages = [image1, image2, image3, image4];

  const carouselText = "Maya Bell!!! Where art and tech collide";

  // Games data - organized for better responsive display
  const games = [
    {
      id: 1,
      title: "Bet Arena",
      image: image11,
      category: "Slot",
    },
    {
      id: 2,
      title: "Business",
      image: image16,
      category: "Roulette",
    },
    {
      id: 3,
      title: "Ghostfather Awakened",
      image: image21,
      category: "Poker",
    },
    {
      id: 4,
      title: "Police Chase",
      image: image12,
      category: "Slot",
    },
    {
      id: 5,
      title: "Aqua Gaming",
      image: image18,
      category: "Casino",
    },
    {
      id: 6,
      title: "Forever Together",
      image: image14,
      category: "Blackjack",
    },
    {
      id: 7,
      title: "Gang Boss",
      image: image17,
      category: "Casino",
    },
    {
      id: 8,
      title: "Electro casino",
      image: image13,
      category: "Slot",
    },
    {
      id: 9,
      title: "Modern God",
      image: image20,
      category: "Slot",
    },
    {
      id: 10,
      title: "Jungle Beast",
      image: image15,
      category: "Blackjack",
    },
    {
      id: 11,
      title: "Beach Gaming",
      image: image19,
      category: "Casino",
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Split games into rows for better organization
  const gamesRows = [];
  for (let i = 0; i < games.length; i += 4) {
    gamesRows.push(games.slice(i, i + 4));
  }

  return (
    <div>
      {/* Carousel Section - Improved */}
      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {carouselImages.map((image, index) => (
            <div key={index} className="carousel-slide">
              {/* Blurred background */}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-bg-blur"
              />

              {/* Main image */}
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="carousel-main-image"
              />

              {/* Overlay with text */}
              <div className="carousel-overlay">
                <h2 className="carousel-text">{carouselText}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button onClick={prevSlide} className="carousel-nav prev">
          &#8249;
        </button>
        <button onClick={nextSlide} className="carousel-nav next">
          &#8250;
        </button>

        {/* Dots indicator */}
        <div className="carousel-dots">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-dot ${
                index === currentSlide ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-container">
        <div className="content-layout">
          {/* Work in Progress Demo Area - Now Horizontal */}
          <div className="demo-section">
            <div className="demo-content">
              <div className="demo-info">
                <div className="demo-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h4l3-4h7a2 2 0 0 0 2-2V6l-3-4H6z" />
                    <path d="M3 6h18" />
                    <path d="M8 10v4" />
                    <path d="M12 10v4" />
                    <path d="M16 10v4" />
                  </svg>
                </div>
                <h3 className="demo-title">Work In Progress</h3>
                <p className="demo-subtitle">
                  Free Slot Game Demo - Coming Soon
                </p>
              </div>
              <div className="demo-placeholder">Demo Area - New Slot Game</div>
            </div>
          </div>

          {/* Games Grid */}
          <div className="games-section">
            <h2 className="games-title">Featured Games</h2>

            <div className="games-grid">
              {gamesRows.map((row, rowIndex) => (
                <div key={rowIndex} className="games-row">
                  {row.map((game) => (
                    <div key={game.id} className="game-card">
                      <div className="game-image-container">
                        <img
                          src={game.image}
                          alt={game.title}
                          className="game-image"
                        />
                        <div className="game-overlay">
                          <div className="play-icon">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="white"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="game-info">
                        <h3 className="game-title">{game.title}</h3>
                        <p className="game-category">{game.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">OPERATORS</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50</div>
              <div className="stat-label">COUNTRIES</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50</div>
              <div className="stat-label">GAMES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
