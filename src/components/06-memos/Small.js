import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('Small render');
    return (
        <small>{value}</small>
    )
})
