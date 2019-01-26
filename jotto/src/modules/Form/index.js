import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
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
                        />
                        <button
                            type="submit"
                            data-test="input-button"
                        >
                            Submit
                        </button>
                    </form>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ success }) => {
    return {success};
};

export default connect(mapStateToProps)(Form);
