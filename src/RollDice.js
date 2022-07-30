import { Component } from 'react';
import Die from './Die';
import './styles/RollDie.css';

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dice: this.fillDie(1),
			isRolling: false
		};
		this.roll = this.roll.bind(this);
	}

	fillDie(n) {
		let r = (a) => Math.floor(Math.random() * a) + 1;
		let i = this.props.dice;
		let dice = [];
		for (i; i > 0; i--) {
			dice.push(r(n));
		}
		return dice;
	}

	roll() {
		let dice = this.fillDie(6);
		this.setState({ isRolling: true });
		setTimeout(() => {
			this.setState({ dice, isRolling: false });
		}, 1000);
	}

	render() {
		let { dice, isRolling } = this.state;
		return (
			<div className="RollDice">
				<div>{dice.map((d, i) => <Die num={d} roll={isRolling} key={i} />)}</div>
				<button onClick={this.roll} disabled={isRolling}>
					{isRolling ? 'Rolling...' : 'Roll Dice'}
				</button>
			</div>
		);
	}
}

export default RollDice;
