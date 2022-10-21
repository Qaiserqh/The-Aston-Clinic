import React from 'react';
import '../../Utilities/Button.css'

export const Button = ({
    children,
    type,
    onClick
}) => {
    
    return (
        <button className='btn' onClick={onClick} type={type}>
            {children}
        </button>
    )
}
