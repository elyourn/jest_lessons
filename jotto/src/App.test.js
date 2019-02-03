import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';

import ConnectedApp, { App } from './App';

test('`getSecretWord runs on App mount`', () => {
    const getSecretWordMock = jest.fn();

    const wrapper = shallow(<App getSecretWord={getSecretWordMock} />);
    wrapper.instance().componentDidMount();
    const getSecretWordCallsCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallsCount).toBe(1);
});