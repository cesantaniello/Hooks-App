import React from 'react';
import {shallow} from 'enzyme';
import {TodoAdd} from '../../../components/08-useReducer/TodoAdd';


describe('Tests on <TodoAdd />', () => {
    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={handleAddTodo} 
        />
    );

    test('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Should not call handleAddTodo on submit', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        });

        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    })

    test('Should call handleAddTodo on submit', () => {
        wrapper.find('input').simulate('change', {
            target: {
                name: 'desc',
                value: 'Aprender React'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        });

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: 'Aprender React',
            done: false
        })

        expect(wrapper.find('input').prop('value')).toBe('');
    })
})