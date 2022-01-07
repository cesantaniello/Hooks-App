import React, {useLayoutEffect, useRef} from 'react';
import {useFetch} from '../../hooks/useFetch';
import {useCounter} from '../../hooks/useCounter';

import './layout.css';
import { useState } from 'react/cjs/react.development';

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});
    
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr />
            
            <blockquote className="blockquote text-end">
                <p className="mb-4" ref={pTag}>{quote}</p>
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 2)}
            </pre>

            <button 
                className="btn btn-primary" 
                onClick={increment}>
                    Next quote
            </button>
        </div>
    )
}
