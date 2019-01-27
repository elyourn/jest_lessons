import axios from 'axios';
import { actionTypes } from '../constants';

export const getSecretWord = () => (dispatch) => (
    axios.get('http:/localhost:3030')
        .then(response => {
            dispatch({
                type: actionTypes.SET_SECRET_WORD,
                payload: response.data,
            })
        })
)