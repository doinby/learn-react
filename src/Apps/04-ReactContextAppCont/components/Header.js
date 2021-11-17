import React from 'react';
import ThemeContext from '../ThemeContext';

export default function Header() {
  return (
    // .Consumer takes value from .Provider in index.js
    // The value being passed here is 'light'
    <ThemeContext.Consumer>
      {/* Inside .Consumer, we can use render() method to */}
      {/* get the theme value from the .Provider */}
      {(theme) => (
        <header className={`${theme}-theme`}>
          {theme === 'dark' ? 'Dark' : 'Light'} Theme
        </header>
      )}
    </ThemeContext.Consumer>
  );
}
