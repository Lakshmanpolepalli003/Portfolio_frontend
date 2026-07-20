import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start the progress bar animation shortly after mount
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 100);

    // After 2.5 seconds (the duration of the progress bar animation)
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);

      // Wait for the fade-out animation to finish before removing the component
      setTimeout(() => {
        // onComplete();
      }, 700); // 600ms matches the CSS transition duration for fade-out
    }, 2600);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(fadeOutTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${isFadingOut ? "fade-out" : ""}`}>
      <div className="loading-content">
        <h1 className="loading-title">
          Lakshman <span>Portfolio</span>
        </h1>
        <p className="loading-subtitle">Full Stack Developer</p>

        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
