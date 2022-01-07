import React, {useEffect} from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('useEffect');
        return () => {
            console.log('cleanup');
        }
    }, []);

    return (
        <div>
            <h3>Eres genial</h3>
        </div>
    )
}
