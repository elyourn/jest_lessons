import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/store/reducers';
import { middlewares } from '../src/store';

export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}

/**
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {String} val - Selector
 * @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );

    expect(propError).toBeUndefined();
}
