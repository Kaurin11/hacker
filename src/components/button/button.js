import React from 'react';

const Button = ({onClick, name }) => {
    return(
        <div>
            <button  onClick={onClick}>{name}</button>
        </div>

    )
}

export default Button;