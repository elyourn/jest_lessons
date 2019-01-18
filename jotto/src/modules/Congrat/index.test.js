import React from 'react';
import Enzyme, { shallow }  from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr } from '../../../test/testUtils';
import Congrat from './index';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory facntion to create to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returns {ShallowWrapper}
*/
const setup = (props={}, state=null) => {
	const wrapper = shallow(<Congrat {...props} />);

	if (state) {
		wrapper.setState(state);
	}

	return wrapper;
}

test('renders without errors', () => {
    const component = findByTestAttr(setup(), "component-congrat");

	expect(component.length).toBe(1);
});

test('renders no text when `success` props is false', () => {
    const component = findByTestAttr(setup({ success: false }), "component-congrat");

	expect(component.text()).toBe('');
});

test('renders success message when `success` props is true', () => {
    const component = findByTestAttr(setup({ success: true }), "congrat-message");

	expect(component.text().length).not.toBe(0);
});