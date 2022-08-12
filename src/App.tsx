import React from 'react';
import './App.css';

type SquareProps = {
  onClick(): void
};

type SquareState = {
  value: string;
};

class Square extends React.Component<SquareProps, SquareState> {
  state: SquareState = {
    value: "",
  };

  render() {
    return (
      <button className='square' onClick={() => {
        this.props.onClick()
        this.setState(state => ({ value: "X" }))
      }}>
        {this.state.value}
      </button>
    );
  }
}

type BoardProps = {
  onClick(i: number): void
};

class Board extends React.Component<BoardProps> {

  render() {
    const renderSquare = (i: number): React.ReactNode => {
      return (
        <Square
          onClick={() => this.props.onClick(i)}
        />
      );
    }

    const status = "Next: X";
    return(
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
      </div >
    );
  }
}

function UpdateData(updatedIndex: number) {
  gamedata[updatedIndex] = turn;
  turn = turn % 2 + 1;
  console.log(gamedata)
}

var turn = 1;
const gamedata = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function App() {
  return (
    <div className='game'>
      <div className='game-board'>
        <Board
          onClick={(i: number) => { UpdateData(i) }}
        />
      </div>
      <div className='game-info'>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
