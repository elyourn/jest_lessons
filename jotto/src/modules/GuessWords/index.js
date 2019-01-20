import React from 'react';
import PropTypes from 'prop-types';
import Instructions from './components/Instructions';
import Table from './components/Table';

const isInstructionShow = (arr) => arr.length === 0 ? true : false;
const isResultsTableShow = (arr) => arr.length === 0 ? false : true;

const GuessWords = ({ guessedWords }) => {
   return (
        <div data-test="component-guess-words">
            {isInstructionShow(guessedWords) &&
                <Instructions />
            }
            {isResultsTableShow(guessedWords) && 
                <Table data={guessedWords} />
            }
        </div>
   )
};

GuessWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            lettersMatchCount: PropTypes.number.isRequired,
        })
    )
}

export default GuessWords;
