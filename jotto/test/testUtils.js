import checkPropTypes from 'check-prop-types';

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
