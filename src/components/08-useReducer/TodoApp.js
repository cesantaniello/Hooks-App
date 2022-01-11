import React, {useReducer, useEffect} from 'react';
import {todoReducer} from './todoReducer';
import {useForm} from '../../hooks/useForm';

import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{desc}, handleInputChange, reset] = useForm({
        desc: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        dispatch({
            type: 'delete',
            payload: todoId
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (desc.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            todos.map((todo, i) => (
                                <li key={todo.id} className="list-group-item">
                                    <p className="text-center">{i+1}. {todo.desc}</p>
                                    <button 
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(todo.id)}
                                        >Borrar
                                    </button>
                                </li>
                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr/>

                    <form className="d-grid gap-2" onSubmit={handleSubmit}>
                        <input
                            type="text" 
                            name="desc" 
                            placeholder="Aprender..." 
                            autocomplete="off"
                            className="form-control"
                            value={desc}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn btn-outline-primary mt-1">
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
