import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {
    
    const [{desc}, handleInputChange, reset] = useForm({
        desc: ''
    });

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

        handleAddTodo(newTodo);
        reset();        
    }

    return (
        <>
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
        </>
    )
}
