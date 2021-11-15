import React, {useContext} from 'react';
import ThemeContext from '../ThemeContext';

export default function Button() {
  const themeContext = useContext(ThemeContext);

  return <button className={`${themeContext}-theme`}>Button</button>;
}
