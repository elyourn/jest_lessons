import React, { Component } from 'react';
import Congrat from './modules/Congrat';
import GuessWords from './modules/GuessWords';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>JottoM</h1>
                <Congrat success={true} />
                <GuessWords guessedWords={[{
                    guessedWord: 'train',
                    lettersMatchCount: 3,
                }]} />
            </div>
        );
    }
}

export default App;
