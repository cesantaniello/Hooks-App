import React from 'react';
import {shallow, mount} from 'enzyme';
import {TodoApp} from '../../../components/08-useReducer/TodoApp';

describe('Tests on <TodoApp />', () => {
    
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn(() => {});
    
    test('Should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Should add a ToDo', () => {

        const wrapper = mount(<TodoApp />);

        const input = wrapper.find('input');
        const form = wrapper.find('form');

        input.simulate('change', {
            target: {
                value: 'New ToDo'
            }
        });

        form.simulate('submit', {
            preventDefault() {}
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    })

    test('Should delete a ToDo', () => {
        const wrapper = mount(<TodoApp />);

        const todoList = wrapper.find('TodoList');
        todoList.props().handleDelete(1);

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    })
})