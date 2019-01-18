import React from 'react';

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

export default Congrat;
