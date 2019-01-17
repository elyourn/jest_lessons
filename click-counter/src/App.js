import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		counter: 0
	};
	incrementHandler = () => {
		this.setState((state) => {
			state.counter += 1;
			return state;
		});
	} 

	render() {
		return (
			<div data-test="component-app">
				<h1 data-test="component-counter">
					Counter is {this.state.counter}
				</h1>
				<button 
					type="buttom" 
					data-test="component-button"
					onClick={this.incrementHandler}
				>
					increment
				</button>
			</div>
		);
  	}
}

export default App;
