import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Tests on todoReducer', () => {
    
    test('should return default values', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    })

    test('should add a new todo', () => {
        const newTodo = {
            id: 3,
            desc: "Learn React",
            done: false
        };
        const state = todoReducer(demoTodos, {
            type: 'add',
            payload: newTodo
        });
        expect(state).toEqual([...demoTodos, newTodo]);
    })
})