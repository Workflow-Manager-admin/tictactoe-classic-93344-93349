import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <button className="btn">Tic Tac Toe Classic</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero" style={{ paddingBottom: '30px' }}>
            <div className="subtitle">Classic Game</div>
            
            <h1 className="title">Tic Tac Toe</h1>
            
            <div className="description">
              A classic two-player strategy game where players take turns marking X or O on a 3x3 grid, 
              aiming to get three of their marks in a row, column, or diagonal.
            </div>
          </div>
          
          {/* TicTacToe Component */}
          <TicTacToe />
        </div>
      </main>
    </div>
  );
}

export default App;