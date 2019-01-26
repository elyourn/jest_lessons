import { correctGuess } from './index';
import { actionTypes } from '../constants';

describe('correct guess', () => {
    test('return an action with type `CORRECT_QUESS`', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: actionTypes.CORRECT_QUESS });
    });
});

