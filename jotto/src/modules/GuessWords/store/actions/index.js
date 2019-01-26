import { getLetterMatchCount } from '../../helper';
import { actionTypes } from '../constants';
import { actionTypes as CongratActionTypes } from '../../../Congrat/store/constants';

export const guessWord = (guessedWord) => {
    return function(dispatch, getState) {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: {
                guessedWord,
                letterMatchCount,
            }
        });

        if (guessedWord === secretWord) {
            dispatch({
                type: CongratActionTypes.CORRECT_QUESS,
            })
        }
    }
};
