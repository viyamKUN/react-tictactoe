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

export default Square;
