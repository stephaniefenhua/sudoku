import React, { useState } from 'react';
import SudokuCell from './SudokuCell';

const SudokuBoard = ({board, setBoard}) => {

  const handleChange = (index, value) => {
    const newBoard = [...board];
    newBoard[index] = value;
    setBoard(newBoard);
  };

  return (
    <div className="sudoku-board">
      {board.map((cell, cellIndex) => (
            <SudokuCell
              key={cellIndex}
              index={cellIndex}
              value={cell}
              onChange={handleChange}
            />
          ))}
    </div>
  );
};

export default SudokuBoard;
