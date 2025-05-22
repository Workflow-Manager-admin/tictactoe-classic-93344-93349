import React, { useState } from 'react';
import './TicTacToe.css';

/**
 * TicTacToe Component - A classic implementation of Tic-Tac-Toe game
 * Features:
 * - 3x3 game board
 * - Alternating turns between X and O players
 * - Win detection for rows, columns, and diagonals
 * - Game status display
 * - Reset game functionality
 */
function TicTacToe() {
  // Game state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true); // X starts first
  const [gameStatus, setGameStatus] = useState('In progress');

  // Calculate winner by checking all possible winning combinations
  const calculateWinner = (squares) => {
    // All possible winning combinations (rows, columns, diagonals)
    const winningLines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal top-left to bottom-right
      [2, 4, 6], // diagonal top-right to bottom-left
    ];

    // Check each winning combination
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      // If all three positions have the same value (and not null), we have a winner
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return X or O
      }
    }

    // Check for draw (all squares filled)
    if (squares.every(square => square !== null)) {
      return 'draw';
    }

    return null; // No winner yet
  };

  // Handle click on a square
  const handleClick = (index) => {
    // Return early if square is already filled or game is won
    if (board[index] || calculateWinner(board)) {
      return;
    }

    // Create a new board array with the updated value
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    // Check for a winner after the move
    const winner = calculateWinner(newBoard);
    if (winner) {
      if (winner === 'draw') {
        setGameStatus('Game ended in a draw!');
      } else {
        setGameStatus(`Winner: ${winner}`);
      }
    } else {
      // Toggle turn if no winner
      setIsXNext(!isXNext);
      setGameStatus(`Next player: ${!isXNext ? 'X' : 'O'}`);
    }
  };

  // Reset the game to initial state
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameStatus('In progress');
  };

  // Render a square of the game board
  const renderSquare = (index) => {
    return (
      <button 
        className="square" 
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  // Determine the game status message
  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner === 'draw') {
      return 'Game ended in a draw!';
    } else if (winner) {
      return `Winner: ${winner}`;
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div className="tic-tac-toe">
      <h2>Tic Tac Toe Classic</h2>
      
      <div className="game-status">
        {gameStatus}
      </div>

      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

      <button className="btn reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;
