import React from 'react';
import './App.css';

interface SquareProps {
  value: number
}

function Square(props:SquareProps) {
  return (
    <button className='square'>
      {props.value}
    </button>
  );
}

function Board() {
  const renderSquare = (i:number) : React.ReactNode => {
    return (
      <Square
        value={i}
      />
    );
  }

  const status = "Next: X";
  return (
    <div>
      <div className='status'>{status}</div>
      <div>
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
    </div>
  );
}

function App() {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
