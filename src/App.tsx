import React from 'react';
import './App.css';

type SquareProps = {
  onClick(): void
  value: string;
};

class Square extends React.Component<SquareProps> {
  render() {
    return (
      <button className='square' onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

type BoardProps = {
  onClick(i: number): void
  data: number[]
  turn: number
};

class Board extends React.Component<BoardProps> {
  render() {
    const renderSquare = (i: number): React.ReactNode => {
      var value = this.props.data[i] === 1 ? "X" : "O"
      value = this.props.data[i] === 0 ? "" : value
      return (
        <Square
          onClick={() => this.props.onClick(i)}
          value={value}
        />
      );
    }

    const label = "Next: ";
    return (
      <div>
        <div className='status'>{label}{this.props.turn === 1 ? "X" : "O"}</div>
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
    this.setState(() => ({ gamedata: data }))
    this.setState(() => ({ turn: this.state.turn % 2 + 1 }))
    console.log(this.state.gamedata)
  }

  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            onClick={(i: number) => { this.updateData(i) }}
            data={this.state.gamedata}
            turn={this.state.turn}
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
