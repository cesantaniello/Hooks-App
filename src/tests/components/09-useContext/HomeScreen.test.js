import React from 'react'
import {mount} from 'enzyme';
import {HomeScreen} from '../../../components/09-useContext/HomeScreen';
import {UserContext} from '../../../components/09-useContext/UserContext';

describe('Tests on <HomeScreen />', () =>{
    
    const user = {
        name: 'Juan',
        email: 'j@email.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );
    
    test('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})