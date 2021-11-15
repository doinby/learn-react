import React, {useContext} from 'react';
import ThemeContext from '../ThemeContext';

export default function Button(props) {
  const themeContext = useContext(ThemeContext);
  return (
    <button className={`${themeContext}-theme`}>
      Switch to {props.isLight ? 'Dark' : 'Light'} Theme
    </button>
  );
}
