import React from 'react';
import { useState } from 'react';

const { Provider, Consumer } = React.createContext();
function UserContextProvider(props) {
    const [username, setUsername] = useState('newUser12345');

    // function changeUsername(event) {
    //     event.preventDefault();
    //     const $input = document.querySelector('input[name="new-username"]');
    //     if ($input.value !== '') {
    //         setUsername($input.value);
    //     }
    // }

    function changeUsername(newUsername) {
        setUsername(newUsername);
    }

    return (
        <Provider value={{username, changeUsername}}>
            {props.children}
        </Provider>
    )
}

export { UserContextProvider, Consumer as UserContextConsumer };


