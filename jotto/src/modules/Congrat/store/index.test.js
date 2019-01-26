import successReducer from './index';
import { actionTypes } from './constants';

test('returns default initial state of `false` whan no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});
test('returns state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_QUESS });
    expect(newState).toBe(true);
});
