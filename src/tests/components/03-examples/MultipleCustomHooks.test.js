import React from 'react';
import {shallow} from 'enzyme';
import {MultipleCustomHooks} from '../../../components/03-examples/MultipleCustomHooks';
import {useFetch} from '../../../hooks/useFetch';
jest.mock('../../../hooks/useFetch');

describe('Tests on <MultipleCustomHooks />', () => {
    
    test('should show it correctly', () => {

        useFetch.mockReturnValue({
            loading: true,
            data: null,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show the information', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'John',
                quote: 'I am the one who knocks'
            }],
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('h1').text()).toBe('Breaking Bad Quotes');
        expect(wrapper.find('hr').length).toBe(1);
    })
})