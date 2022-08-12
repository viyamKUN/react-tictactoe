import React from 'react';
import './App.css';
import Square from './square'

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

export default Board;
