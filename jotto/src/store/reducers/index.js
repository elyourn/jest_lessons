import { combineReducers } from 'redux';
import success from '../../modules/Congrat/store';
import guessedWords from '../../modules/GuessWords/store';
import secretWord from '../../modules/SecretWord/store';

export default combineReducers({ 
    success,
    guessedWords,
    secretWord,
});