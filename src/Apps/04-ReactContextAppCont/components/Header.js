import React from 'react';
import { ThemeContextConsumer } from '../ThemeContext';

export default function Header() {
  return (
    // .Consumer takes value from .Provider in index.js
    // The value being passed here is 'light'
    <ThemeContextConsumer>
      {/* Inside .Consumer, we can use render() method to */}
      {/* get the theme value from the .Provider */}
      {(provObject) => {
        const {theme} = provObject;
        return (
          <header className={`${theme}-theme`}>
            <h1>{theme === 'dark' ? 'Dark' : 'Light'} Theme</h1>
          </header>
        );
      }}
    </ThemeContextConsumer>
  );
}
