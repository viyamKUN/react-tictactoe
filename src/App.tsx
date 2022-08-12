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
      </div >
    );
  }
}


type AppState = {
  turn: number,
  gamedata: number[],
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    turn: 1,
    gamedata: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  updateData(updatedIndex: number) {
    var data = this.state.gamedata;
    data[updatedIndex] = this.state.turn;
    this.setState(state => ({gamedata: data}))
    this.setState(state => ({turn: this.state.turn % 2 + 1}))
    console.log(this.state.gamedata)
  }

  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            onClick={(i: number) => { this.updateData(i) }}
          />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default App;
