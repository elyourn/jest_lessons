import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../../../test/testUtils';
import Congrat from './index';
import { defaultProps } from './constants';

/**
 * Factory function to create to create ShallowWrapper for the App component
 * @function setup
 * @param {object} initialStore - Component props specific to this setup
 * @returns {ShallowWrapper}
*/
const setup = (initialStore={}) => {
    const store = storeFactory(initialStore);
    const wrapper = shallow(<Congrat store ={store} />).dive();

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

test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
	checkProps(Congrat, expectedProps)
});