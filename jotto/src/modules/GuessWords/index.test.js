import React from 'react';
import { mount } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../../../test/testUtils';
import GuessWords from './index';
import { defaultProps } from './constants';

/**
 * Factory function to create to create MountWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {MountWrapper}
*/
/**
 * TODO: Есть баг с redux 6 and enzyme, проверить после - 
 * https://www.udemy.com/react-testing-with-jest-and-enzyme/learn/v4/questions/5774179
*/
/**
 * TODO: После фикса надо переписать на получение даныых из redux store
*/
const setup = (initialStore={}) => {
    const store = storeFactory(initialStore);
    const wrapper = mount(<GuessWords store ={store} />);

    return wrapper;
}

describe('if there are no words guesses', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    
    test('renders without errors', () => {
        const component = findByTestAttr(wrapper, "component-guess-words");
    
        expect(component.length).toBe(1);
    });

    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, "guess-instructions");
    
        expect(instructions.text().length).not.toBe(1);
    });
});

describe('if there are words guessed', () => {
    const guessedWords = [
        {
            guessedWord: 'train',
            lettersMatchCount: 3,
        },
        {
            guessedWord: 'agile',
            lettersMatchCount: 1,
        },
        {
            guessedWord: 'party',
            lettersMatchCount: 5,
        }
    ];
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });
    
    test('renders without errors', () => {
        const component = findByTestAttr(wrapper, "component-guess-words");
    
        expect(component.length).toBe(1);
    });

    test('render "guessed word" section', () => {
        const guessWordsNode = findByTestAttr(wrapper, "guess-words");
    
        expect(guessWordsNode.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const guessedWord = findByTestAttr(wrapper, "guess-word");
    
        expect(guessedWord.length).toBe(guessedWords.length);
    });
});



test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
	checkProps(GuessWords, expectedProps)
});