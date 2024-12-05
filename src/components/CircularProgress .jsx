import React from "react";
import "./CircularProgress.css"; // Import the CSS

const CircularProgress = ({ percent }) => {
  const circleStyle = {
    "--percent": percent, // Dynamically set the CSS variable for percent
  };

  return (
    
    <div className="circle-container">
      <div className="circle" style={circleStyle}>
        <span>{percent}%</span>
      </div>
    </div>
  );
};






export default CircularProgress;
