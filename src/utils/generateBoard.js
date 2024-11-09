// src/utils/generateBoard.js
import sudoku from 'sudoku';

export const generateBoard = () => {

  const sudoku = require('sudoku');
 
  const puzzle     = sudoku.makepuzzle();
  const solution   = sudoku.solvepuzzle(puzzle);
  puzzle.forEach((value, index) => {
    puzzle[index] = value ? value + 1 : value;
  });

  solution.forEach((value, index) => {
    solution[index] = value + 1;
  });
  // const difficulty = sudoku.ratepuzzle(puzzle, 4);
  console.log("puzzle", puzzle);
  return {puzzle, solution}; 
};
