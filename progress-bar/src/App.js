import React, { useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar'; // Adjust the path based on your folder structure

const App = () => {
  const [progress, setProgress] = useState(0);
  const max = 100;
  
  const handleIncrease = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, max));
  };

  // Function to handle progress decrease
  const handleDecrease = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 10, 0));
  };

  return (
    <div className="app">
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress} max={100} />
      <button onClick={handleIncrease}>Increase Progress</button>
      <button onClick={handleDecrease}> Decrease progress</button>
    </div>
  );
};

export default App;
