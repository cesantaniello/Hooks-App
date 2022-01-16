import React from 'react'
import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/09-useContext/LoginScreen'
import {UserContext} from '../../../components/09-useContext/UserContext'

describe('Tests on <LoginScreen />', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser: jest.fn()
        }}>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
})