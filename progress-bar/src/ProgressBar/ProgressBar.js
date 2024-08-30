import React from 'react';
import './ProgressBar.css'; 

const ProgressBar = ({ progress, max }) => {
  // Calculate the width of the filled portion of the progress bar
  const progressPercentage = (progress / max) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress-bar-fill"
        style={{ width: `${progressPercentage}%` }}
      >
        <span className="progress-bar-text">{Math.floor(progressPercentage)}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
