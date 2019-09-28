import React, { Component } from 'react';

class BuggyCounter extends Component {
    state = { counter: 0 };

    handleDecrement = () => {
        let { counter } = this.state;
        this.setState({ counter: --counter });
    };

    handleIncrement = () => {
        let { counter } = this.state;
        this.setState({ counter: ++counter });
    };

    render() {
        const { counter } = this.state;

        if (counter > 5) throw new Error('Error occurred during incrementing the counter');

        return (
            <div onClick={this.handleOnClick}>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <span>{counter}</span>
            </div>
        );
    }
}

export default BuggyCounter;
