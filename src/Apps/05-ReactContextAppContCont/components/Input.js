import React from 'react'

export default function Input(props) {
    const { name, type, placeholder, onChange } = props;
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}
