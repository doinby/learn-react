import React from 'react';
import { useState } from 'react';

// Destructuring the 2 variables from React Context
const { Provider, Consumer } = React.createContext();

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        setTheme(prevTheme => {
            return prevTheme === 'light' ? 'dark' : 'light';
        });
    }
    
    // Better pratice to pass default value here
    // instead of inside index.js
    return (
        // Provider used to pass string value from theme,
        // but now, it's an OBJECT!
        <Provider value={{theme: theme, toggleTheme: toggleTheme}}>
            
        {/* Pass all children from props inside Provider */}
            {props.children}
        </Provider>
        );
    }
    
    export { ThemeContextProvider, Consumer as ThemeContextConsumer };
