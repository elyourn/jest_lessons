import { INITIAL_STATE } from './constants';
import { actionTypes } from './constants';

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case (actionTypes.GUESS_WORD): {
            return [
                ...state,
                action.payload,
            ];
        }
        default: {
            return state
        }
    }
};