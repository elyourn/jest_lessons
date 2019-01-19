import React from 'react';
import PropTypes from 'prop-types';

const Congrat = ({ success }) => {
   if (success === true) {
       return (
            <div data-test="component-congrat">
                <span data-test="congrat-message">
                    Congratulations! You guess the word.
                </span>
            </div>
       )
   }

   return  <div data-test="component-congrat" />;
};

Congrat.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrat;
