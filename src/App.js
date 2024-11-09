import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { generateBoard } from './utils/generateBoard';
import SudokuBoard from './components/SudokuBoard';
import Controls from './components/Controls';

function App() {
  const {puzzle, solution} = generateBoard();
  const [board, setBoard] = useState(puzzle);
  const [originalBoard, setOriginalBoard] = useState(() => JSON.parse(JSON.stringify(puzzle)));
  const [solvedBoard, setSolvedBoard] = useState(solution);
  //console.log("board", board);
  //console.log("originalBoard", originalBoard);
  console.log("solvedBoard", solvedBoard);

  const handleNewPuzzle = () => {
    const {puzzle, solution} = generateBoard();
    setBoard(puzzle);
    setOriginalBoard(JSON.parse(JSON.stringify(puzzle)));
    setSolvedBoard(solution);
  };

  const handleReset = () => {
    setBoard(JSON.parse(JSON.stringify(originalBoard)));
  };

  const handleSolve = () => {
    setBoard(solvedBoard);
  };


  return (
    <div className="App">
      <h1>Sudoku</h1>
      <SudokuBoard board={board} setBoard={setBoard} />
      <Controls onNewPuzzle={handleNewPuzzle} onReset={handleReset} onSolve={handleSolve} />
    </div>
  );
}

export default App;
