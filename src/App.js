import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import About from "./Components/about";
import Art from "./Components/art";
import Animation from "./Components/animation";
import Contact from "./Components/contact";
import { Toaster } from "react-hot-toast";
import Error from "./Components/error"

// Preloader Component
const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const loadingTexts = [
      "Initializing...",
      "Discovering assets...",
      "Loading images...",
      "Loading components...",
      "Preparing experience...",
      "Almost ready...",
      "Welcome to Maya Bell!",
    ];

    let isComplete = false;

    const startImagePreloading = async () => {
      try {
        // Create comprehensive list of images to preload
        const imagesToPreload = [
          // Common image paths from images directory
          "/Images/3d-cartoon-rendering-person-playing-casino (1).jpg",
          "/Images/3d-cartoon-rendering-person-playing-casino (2).jpg",
          "/Images/3d-cartoon-rendering-person-playing-casino (5).jpg",
          "/Images/3d-cartoon-rendering-person-playing-casino (7).jpg",
          "/Images/blackjack-1-forever-together.jpg",
          "/Images/blackjack-2-jungle-beast.jpg",
          "/Images/casino-1-gang-boss.jpg",
          "/Images/casino-2-aqua-gaming.jpg",
          "/Images/casoni-3-beach-game.jpg",
          "/Images/gambling-lady.jpg",
          "/Images/maya-bell-logo.png",
          "/Images/maya-bell-nav-logo.png",
          "/Images/poker-1-godfather-awakening.jpg",
          "/Images/rolulette-1-business.jpg",
          "/Images/slot-1-bet-arena.jpg",
          "/Images/slot-2-police-chase.jpg",
          "/Images/slot-3-eltro-casino.jpg",
          "/Images/slot-4-modern-gods.jpg",
          "/Images/Roulette-2-zombie-attack.jpg"
        ];

        // Remove duplicates
        const uniqueImages = [...new Set(imagesToPreload)];
        setTotalCount(uniqueImages.length);
        setLoadingText("Discovering assets...");

        let loaded = 0;
        let failed = 0;

        // Create promises for all images
        const imagePromises = uniqueImages.map((src, index) => {
          return new Promise((resolve) => {
            const img = new Image();

            const handleComplete = (success) => {
              if (success) {
                loaded++;
                console.log(`✓ Loaded: ${src}`);
              } else {
                failed++;
                // Don't log failures to avoid console spam
              }

              setLoadedCount(loaded);
              const currentProgress =
                ((loaded + failed) / uniqueImages.length) * 90; // 90% for images
              setProgress(currentProgress);

              // Update loading text based on progress
              const textIndex = Math.min(
                Math.floor((currentProgress / 90) * (loadingTexts.length - 2)),
                loadingTexts.length - 2
              );
              setLoadingText(loadingTexts[textIndex]);

              resolve();
            };

            // Set timeout to prevent hanging
            const timeout = setTimeout(() => {
              handleComplete(false);
            }, 3000);

            img.onload = () => {
              clearTimeout(timeout);
              handleComplete(true);
            };

            img.onerror = () => {
              clearTimeout(timeout);
              handleComplete(false);
            };

            img.src = src;
          });
        });

        // Wait for all images to complete (load or fail)
        await Promise.all(imagePromises);

        if (isComplete) return;

        // Final loading steps
        setProgress(95);
        setLoadingText("Loading components...");

        // Wait for fonts
        if (document.fonts) {
          await document.fonts.ready;
        }

        await new Promise((resolve) => setTimeout(resolve, 500));

        setProgress(100);
        setLoadingText("Welcome to Maya Bell!");

        console.log(
          `Image preloading complete: ${loaded} loaded, ${failed} failed out of ${uniqueImages.length} total`
        );

        // Complete loading
        setTimeout(() => {
          if (!isComplete) {
            isComplete = true;
            onLoadingComplete();
          }
        }, 4200);
      } catch (error) {
        console.error("Error during preloading:", error);
        // Still complete loading even if there's an error
        setTimeout(() => {
          if (!isComplete) {
            isComplete = true;
            onLoadingComplete();
          }
        }, 7800);
      }
    };

    // Start preloading after a brief delay
    const startDelay = setTimeout(() => {
      startImagePreloading();
    }, 500);

    return () => {
      isComplete = true;
      clearTimeout(startDelay);
    };
  }, [onLoadingComplete]);

  return (
    <div className="preloader">
      <div className="preloader-content">
        {/* Animated Logo/Brand */}
        <div className="loader-brand">
          <div className="brand-text">
            <span className="maya">Maya</span>
            <span className="bell">Bell</span>
          </div>
          <div className="brand-tagline">Where art and tech collide</div>
        </div>

        {/* Animated Circles */}
        <div className="loader-animation">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{Math.round(progress)}%</div>
        </div>

        {/* Loading Text with Counter */}
        <div className="loading-text">
          {loadingText}
          {totalCount > 0 && (
            <div className="loading-counter">
              {loadedCount} / {totalCount} assets loaded
            </div>
          )}
        </div>
      </div>

      {/* Background Animation */}
      <div className="bg-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
      </div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // This effect is now handled in the Preloader component
  useEffect(() => {
    // Any additional setup can go here
    console.log("Maya Bell App initialized");
  }, []);

  if (isLoading) {
    return <Preloader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/art" element={<Art />} />
            <Route path="/animation" element={<Animation />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/under-constructions" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
