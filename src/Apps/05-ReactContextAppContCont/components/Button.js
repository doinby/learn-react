import React from 'react';

export default function Button(props) {
    const { displayText, onClick } = props;
    return (
        <button onClick={onClick}>
            {displayText}
        </button>
    )
}
