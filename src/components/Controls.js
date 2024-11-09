// src/components/Controls.js
import React from 'react';

const Controls = ({ onNewPuzzle, onReset, onSolve }) => {
  return (
    <div className="controls">
      <button onClick={onNewPuzzle}>New Puzzle</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onSolve}>Solve</button>
    </div>
  );
};

export default Controls;
