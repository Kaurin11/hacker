import React from 'react';

const Button = ({onClick, name }) => {
    return(
        <div className="btn btn--orange btn--animated">
            <div  onClick={onClick}>{name}</div>
        </div>

    )
}

export default Button;