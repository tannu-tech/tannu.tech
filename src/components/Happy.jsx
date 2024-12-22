import React from "react";

import { useState, useEffect } from "react";
import "./Happy.css";


import confetti from 'canvas-confetti';

const Happy = () => {
  const [digit, setDigit] = useState('4');
  const [balloonOpacity, setBalloonOpacity] = useState(1);
  const [balloonSrc, setBalloonSrc] = useState('4.png');
  const [balloonTransform, setBalloonTransform] = useState('translateY(10px)');
  const [balloonDisplay, setBalloonDisplay] = useState('block');
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Set initial balloon opacity
    const balloonTimeout = setTimeout(() => {
      setBalloonOpacity(0.01);
    }, 100);

    // Change digit to 5 and update balloon after 5 seconds
    const digitAndBalloonTimeout = setTimeout(() => {
      setDigit('5');
      setBalloonSrc('5.png');
      setBalloonTransform('translate(-20px, 10px)');
      setBalloonDisplay('none');
    }, 5000);

    // Show "Happy New Year" text and launch confetti after 6 seconds
    const newYearTextTimeout = setTimeout(() => {
      setShowText(true);
      launchConfetti();
    }, 6000);

    // Cleanup timeouts on component unmount
    return () => {
      clearTimeout(balloonTimeout);
      clearTimeout(digitAndBalloonTimeout);
      clearTimeout(newYearTextTimeout);
    };
  }, []);

  // Function to trigger confetti
//   const launchConfetti = () => {
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { x: 0.5, y: 0.5 }
//     });
//   };

  return (
    <div className="container">
        
      <div id="year" className="year">
        202<span id="digit">{digit}</span>
      </div>
      
      
      <img
        id="balloon"
        className="balloon"
        src="4.png"
        // src={balloonSrc}
        alt="Balloon"
        style={{ 
            opacity: balloonOpacity,
            transform: balloonTransform,
            display: balloonDisplay
             }}
      />

      {showText && <div id="newYearText" className="happy-text">Happy New Year!</div>}
  

    </div>
  );
};

export default Happy;
