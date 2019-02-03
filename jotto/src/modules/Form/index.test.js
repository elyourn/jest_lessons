import React from 'react';
import { mount, shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import ConnectedForm, { Form } from './index';

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
const setup = (props={}) => {
    const wrapper = mount(<Form {...props} />);

    return wrapper;
}

const setupForStore = (initialStore={}) => {
    const store = storeFactory(initialStore);
    const wrapper = shallow(<ConnectedForm store={store} />).dive();

    return wrapper;
}

describe('render', () => {
    describe('word has not be guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = {success: false};
            wrapper = setup(initialState);
        })
        test('renders without errors', () => {
            const component = findByTestAttr(wrapper, "component-input");
        
            expect(component.length).toBe(1);
        });
        test('renders input box', () => {
            const component = findByTestAttr(wrapper, "input-box");
        
            expect(component.length).toBe(1);
        });
        test('renders submit button', () => {
            const component = findByTestAttr(wrapper, "input-submit");
        
            expect(component.length).toBe(1);
        });
    });
});

describe('`guessWord` action creator call', () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = 'train';

    beforeEach(() => {
        guessWordMock = jest.fn();
        const props = {
            guessWord: guessWordMock
        }
        wrapper = setup(props);

        wrapper.instance().input.current = { value: guessedWord };

        const submitButtonComponent = findByTestAttr(wrapper, "input-submit");
        submitButtonComponent.simulate('click', { preventDefault: () => {}});
    });
    test('`guessWord` runs on submit button click`', () => {
        const getGuessWordMockCallsCount = guessWordMock.mock.calls.length;
        expect(getGuessWordMockCallsCount).toBe(1);
    });
    test('calls `guessWord` with input value as argument', () => {
        const guessWordArgs = guessWordMock.mock.calls[0][0];

        expect(guessWordArgs).toBe(guessedWord);
    });
});


describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true;
        const wrapper = setupForStore({ success });
        const successProp = wrapper.instance().props.success;
      
        expect(successProp).toBe(success)
    });
    test('`guessWord` action creator is a function prop', () => {
        const wrapper = setupForStore();
        const guessWordProp = wrapper.instance().props.guessWord;

        expect(guessWordProp).toBeInstanceOf(Function);
    });
});