import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { guessWord } from '../GuessWords/store/actions';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    onClick = (e) => {
        e.preventDefault();
        this.props.guessWord(this.input.current.value);
        this.input.current.value = '';
    };

    render() {
        return(
            <div data-test="component-input">
                {this.props.success ? 
                    null 
                    : 
                    <form className='form-inline'>
                        <input
                            id="word-guess"
                            type="text"
                            className="mb-2 ms-sm-3"
                            data-test="input-box"
                            placeholder="enter guess"
                            ref={this.input}
                        />
                        <button
                            type="submit"
                            data-test="input-submit"
                            onClick={this.onClick}
                        >
                            Submit
                        </button>
                    </form>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ success }) => ({success});
const mapDispatchToProps = (dispatch) => ({
    guessWord: bindActionCreators(guessWord, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
