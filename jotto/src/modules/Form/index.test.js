import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Form from './index';

/**
 * Factory function to create to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
*/
/**
 * TODO: Есть баг с redux 6 and enzyme, проверить после - 
 * https://www.udemy.com/react-testing-with-jest-and-enzyme/learn/v4/questions/5774179
*/
const setup = (initialStore={}) => {
    const store = storeFactory(initialStore);
    const wrapper = shallow(<Form {...initialStore}/>);
    console.log(wrapper.debug())
    return wrapper;
}

describe('render', () => {
    describe('word has not be guessed', () => {
        let wrapper;
        beforeEach(() => {
            // const initialState = {success: false};
            // wrapper = setup(initialState);
        })
        test('renders without errors', () => {
            // const component = findByTestAttr(wrapper, "component-input");
        
            // expect(component.length).toBe(1);
        });
        test('renders input box', () => {
            // const component = findByTestAttr(wrapper, "input-box");
        
            // expect(component.length).toBe(1);
        });
        test('renders submit button', () => {
            // const component = findByTestAttr(wrapper, "input-submit");
        
            // expect(component.length).toBe(1);
        });
    });
    describe('word has be guessed', () => {
        test('renders without errors', () => {
            // const component = findByTestAttr(setup(), "component-congrat");
        
            // expect(component.length).toBe(1);
        });
        test('does not render input box', () => {});
        test('does not render submit button', () => {});
    })
});
describe('update state', () => {});

test('renders without errors', () => {
    // const component = findByTestAttr(setup(), "component-congrat");

	// expect(component.length).toBe(1);
});

test('renders no text when `success` props is false', () => {
    // const component = findByTestAttr(setup({ success: false }), "component-congrat");

	// expect(component.text()).toBe('');
});

test('renders success message when `success` props is true', () => {
    // const component = findByTestAttr(setup({ success: true }), "congrat-message");

	// expect(component.text().length).not.toBe(0);
});