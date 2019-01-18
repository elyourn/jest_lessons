import React, { Component } from 'react';
import './App.css';

const checkValueLimit = (val) => {
	const newVal =  val - 1;
	
	if (newVal < 0) {
		return val;
	}

	return newVal;
}

const toggleNotification = (val) => val > 0 ? true : false;

class App extends Component {
	state = {
		counter: 0,
		notification: false,
	};
	incrementHandler = () => {
		this.setState((state) => {
			state.counter += 1;
			return state;
		});
	}
	decrementHandler = () => {
		this.setState((state) => {
			state.counter = checkValueLimit(state.counter);
			return state;
		});
	}

	static getDerivedStateFromProps (nextProps, prevState) {
		return {
			notification: toggleNotification(prevState) 
		}
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
					increment
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
