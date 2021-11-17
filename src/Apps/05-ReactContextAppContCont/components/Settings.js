import React, {useState} from 'react'
import Button from './Button'
import Input from './Input'
import {UserContextConsumer} from '../UserContext';

export default function Settings() {
    const [newUsername, setNewUsername] = useState('');

    function handleOnChange(event) {
        // Get event.target.name
        // Update newUsername state
        setNewUsername(event.target.value);
    }

    return (
        <UserContextConsumer>
            {({username, changeUsername}) => {
                return (
                  <form className='settings'>
                    <label>Enter New Username:</label>
                    <Input
                      name='new-username'
                      type='text'
                      placeholder='bob12345'
                      onChange={handleOnChange}
                    />
                    <Button
                      displayText='Confirm Change'
                            onClick={(event) => {
                            event.preventDefault();
                            changeUsername(newUsername);
                      }}
                    />
                  </form>
                );
            }}
        </UserContextConsumer>
        
    )
}
