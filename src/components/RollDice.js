import React, { Component } from 'react';

import './RollDice.css';
import Die from './Die';

export class RollDice extends Component {
    constructor(props) {
        super(props);

        // Dice state
        this.state = {
            die1: 'six',
            die2: 'six',
            rolling: false,
        };

        // binding roll() to class
        this.roll = this.roll.bind(this);
    }

    roll() {
        // Generate random number
        const randomNum = () => {
            const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];
            const random = Math.floor(Math.random() * numbers.length);
            return numbers[random];
        };
        // Updating state
        this.setState({
            rolling: true,
        });

        // set timeout
        setTimeout(() => {
            this.setState({
                rolling: false,
                die1: randomNum(),
                die2: randomNum(),
            });
        }, 1234);
    }

    render() {
        return (
            <div className="RollDice">
                <div className={`dices ${this.state.rolling && 'shake'}`}>
                    <Die num={this.state.die1} />
                    <Die num={this.state.die2} />
                </div>
                <button disabled={this.state.rolling} onClick={this.roll}>
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        );
    }
}

export default RollDice;
