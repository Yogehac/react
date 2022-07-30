import { Component } from 'react';
import RollDice from './RollDice';
import './styles/App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<RollDice dice={2} />
			</div>
		);
	}
}

export default App;
