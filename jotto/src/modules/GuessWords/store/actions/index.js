import axios from 'axios';

import { getLetterMatchCount } from '../../helper';
import { actionTypes } from '../constants';
import { actionTypes as CongratActionTypes } from '../../../Congrat/store/constants';


export const getSecretWord = () => (dispatch) => (
    axios.get('http:/localhost:3030')
        .then(response => {
            dispatch({
                type: actionTypes.SET_SECRET_WORD,
                payload: response.data,
            })
        })
)


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
