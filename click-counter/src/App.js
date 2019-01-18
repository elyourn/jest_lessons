import React, { Component } from 'react';
import './App.css';

const checkValueLimit = (val) => {
	if (val < 0) {
		return 0;
	}

	return val;
}

const toggleNotification = (val) => val >= 0 ? false : true;

class App extends Component {
	state = {
		counter: 0,
		notification: false,
	};
	incrementHandler = () => {
		this.setState((state) => {
			const newState = state.counter + 1;
			state.counter = newState;
			state.notification = toggleNotification(newState);

			return state;
		});
	}
	decrementHandler = () => {
		this.setState((state) => {
			const newState =  state.counter - 1;
			state.counter = checkValueLimit(newState);
			state.notification = toggleNotification(newState);

			return state;
		});
	}
	
	render() {
		return (
			<div data-test="component-app">
				<h1 data-test="component-counter">
					Counter is {this.state.counter}
				</h1>
				{this.state.notification &&
					<div data-test="component-notification">
						Value can't be less than 0
					</div>
				}
				<button
					type="button" 
					data-test="component-decrement-button"
					onClick={this.decrementHandler}
				>
					decrement
				</button>
				<button
					type="button" 
					data-test="component-increment-button"
					onClick={this.incrementHandler}
				>
					increment
				</button>
			</div>
		);
  	}
}

export default App;
