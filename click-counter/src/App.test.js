import React from 'react';
import Enzyme, { shallow }  from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory facntion to create to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
*/
const setup = (props={}, state=null) => {
	const wrapper = shallow(<App {...props} />);

	if (state) {
		wrapper.setState(state);
	}

	return wrapper;
}

/**
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {String} val - Selector
 * @returns {ShallowWrapper}
*/
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

const clickToIncrementButton = (wrapper) => {
	const buttonComponent = findByTestAttr(wrapper, "component-increment-button");
	buttonComponent.simulate('click');
	wrapper.update();
};

const clickToDecrementButton = (wrapper) => {
	const buttonComponent = findByTestAttr(wrapper, "component-decrement-button");
	buttonComponent.simulate('click');
	wrapper.update();
};

test('renders without errors', () => {
	const appComponent = findByTestAttr(setup(), "component-app");

	expect(appComponent.length).toBe(1);
});
test('renders increment button', () => {
	const buttonComponent = findByTestAttr(setup(), "component-increment-button");

	expect(buttonComponent.length).toBe(1);
});
test('renders decrement button', () => {
	const buttonComponent = findByTestAttr(setup(), "component-decrement-button");

	expect(buttonComponent.length).toBe(1);
});
test('renders counters display', () => {
	const counterComponent = findByTestAttr(setup(), "component-counter");

	expect(counterComponent.length).toBe(1);
});
test('counters starts at 0', () => {
	const wrapper = setup();
	const initialCounterState = wrapper.state('counter');

	expect(initialCounterState).toBe(0);
});

test('clicking button decrement counter display', () => {
	const wrapper = setup();
	const initialCounterState = wrapper.state('counter');

	expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {
	const counter = 7;
	const wrapper = setup(null, { counter });
	
	clickToIncrementButton(wrapper);

	const counterComponent = findByTestAttr(wrapper, "component-counter");
	expect(counterComponent.text()).toContain(counter + 1);
});

test('clicking button decrement counter display', () => {
	const counter = 7;
	const wrapper = setup(null, { counter });
	
	clickToDecrementButton(wrapper);

	const counterComponent = findByTestAttr(wrapper, "component-counter");
	expect(counterComponent.text()).toContain(counter - 1);
});

test('clicking button decrement can`t be less than 0', () => {
	const counter = 0;
	const wrapper = setup(null, { counter });
	
	clickToDecrementButton(wrapper);

	const counterComponent = findByTestAttr(wrapper, "component-counter");
	expect(counterComponent.text()).toContain(0);
});