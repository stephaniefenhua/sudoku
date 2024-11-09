// src/components/SudokuCell.js
import React from 'react';

const SudokuCell = ({ index, value, onChange }) => {
  const handleInputChange = (e) => {
    onChange(index, e.target.value);
  };

  return (
    <input
      type="number"
      min="1"
      max="9"
      value={value || ''}
      onChange={handleInputChange}
      className="sudoku-cell"
    />
  );
};

export default SudokuCell;
