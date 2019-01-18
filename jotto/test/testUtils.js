/**
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {String} val - Selector
 * @returns {ShallowWrapper}
*/
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);
