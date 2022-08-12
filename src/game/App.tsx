import React from 'react';
import './App.css';
import Board from './board';

enum GameStatus {
  Playing, Draw, WinX, WinY
}

function getGameStatus(data: number[]): GameStatus {
  const isDraw = () => {
    for (let i = 0; i < 9; i++) {
      if (data[i] === 0) return false;
    }
    return true
  }

  const getWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (data[a] === data[b] && data[a] === data[c]) {
        return data[a];
      }
    }
    return 0
  }

  if (isDraw()) return GameStatus.Draw
  const winner = getWinner();
  if (winner > 0) return winner === 1 ? GameStatus.WinX : GameStatus.WinY
  return GameStatus.Playing
}

type AppState = {
  turn: number,
  gamedata: number[],
  gamestatus: GameStatus
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    turn: 1,
    gamedata: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    gamestatus: GameStatus.Playing
  };

  checkValidCell(i: number): boolean {
    return this.state.gamedata[i] === 0;
  }

  updateData(updatedIndex: number) {
    var data = this.state.gamedata;
    data[updatedIndex] = this.state.turn;
    this.setState(() => ({ gamedata: data }))
    this.setState(() => ({ turn: this.state.turn % 2 + 1 }))
    this.setState(() => ({ gamestatus: getGameStatus(this.state.gamedata) }))
    console.log(this.state.gamedata)
  }

  getStatus(): string {
    switch (this.state.gamestatus) {
      case GameStatus.Playing:
        return "Next: " + (this.state.turn === 1 ? "X" : "O")

      case GameStatus.Draw:
        return "Draw"

      case GameStatus.WinX:
        return "Win X!"

      case GameStatus.WinY:
        return "Win Y!"
    }
  }

  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            onClick={(i: number) => {
              if (this.checkValidCell(i)) {
                this.updateData(i)
              }
            }}
            data={this.state.gamedata}
            turn={this.state.turn}
            status={this.getStatus()}
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
