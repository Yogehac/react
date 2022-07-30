import { Component } from 'react';
import './styles/Die.css';

class Die extends Component {
	getNum(i) {
		let num = [ 'one', 'two', 'three', 'four', 'five', 'six' ];
		return num[i - 1];
	}

	render() {
		let { num, roll } = this.props;
		let numStr = this.getNum(num);
		let cls = `fas fa-dice-${numStr} dice ${roll && 'roll'}`;
		return <i className={cls} />;
	}
}

export default Die;
