import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Congrat from './modules/Congrat';
import GuessWords from './modules/GuessWords';
import Form from './modules/Form';
import { getSecretWord } from './modules/SecretWord/store/actions';

import './App.css';

export class App extends Component {
    componentDidMount() {
        this.props.getSecretWord();
    }

    render() {
        return (
            <div className="container">
                <h1>JottoM</h1>
                <Form />
                <Congrat />
                <GuessWords />
            </div>
        );
    }
}

const mapStateToProps = (store, self) => self;
const mapDispatchToProps = (dispatch) => ({
    getSecretWord: bindActionCreators(getSecretWord, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
