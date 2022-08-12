import React from 'react';
import './App.css';
import Board from './board';

type AppState = {
  turn: number,
  gamedata: number[],
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    turn: 1,
    gamedata: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  };

  checkValidCell(i: number): boolean {
    return this.state.gamedata[i] === 0;
  }

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
            onClick={(i: number) => {
              if (this.checkValidCell(i)) {
                this.updateData(i)
              }
            }}
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
