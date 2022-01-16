import React from 'react'
import {mount } from 'enzyme'
import {AppRouter} from '../../../components/09-useContext/AppRouter'
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Tests on <AppRouter />', () => {
    
    const user = {
        id: 123,
        name: 'Jhon'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})