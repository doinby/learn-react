import React, {useContext} from 'react';
import ThemeContext from '../ThemeContext';

export default function Header(props) {
  const themeContext = useContext(ThemeContext);
  return (
    <header className={`${themeContext}-theme`}>
      <h1>{props.isLight ? 'Light' : 'Dark'} Theme</h1>
    </header>
  );
}
