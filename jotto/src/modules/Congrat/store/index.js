import { INITIAL_STATE } from './constants';
import { actionTypes } from './constants';;

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case (actionTypes.CORRECT_QUESS) : {
            return true;
        }
        default: {
            return state
        }
    }
};