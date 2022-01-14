import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        
        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(response => response.json())
            .then(data => {
                (isMounted.current) 
                    ? setState({data, loading: false,error: null})
                    : console.log('Error');
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'Error fetching data'
                })
            })
    }, [url])
    return state;
}
