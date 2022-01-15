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

    test('should delete a todo', () => {
        const id = 1;
        const state = todoReducer(demoTodos, {
            type: 'delete',
            payload: id
        });
        expect(state).toEqual(demoTodos.filter(todo => todo.id !== id));
    })

    test('should toggle a todo', () => {
        const id = 1;
        const state = todoReducer(demoTodos, {
            type: 'toggle',
            payload: id
        });
        expect(state).toEqual(demoTodos.map(todo =>
            (todo.id === id)
                ? { ...todo, done: !todo.done }
                : todo
        ));
    })
})