import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;

    useEffect(() => {
        // console.log('useEffect');
    }, []);

    useEffect(() => {
        // console.log('formState changed');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed');
    }, [email]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    };

    return (
        <>
            <h1>Simple Form</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Type your name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>    

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="name@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name === '123') && <Message />}              
        </>
    )
}
