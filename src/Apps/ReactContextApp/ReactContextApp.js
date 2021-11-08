import React, {useContext, useState} from 'react';
import Header from './components/Header';
import Button from './components/Button';
import './ReactContextApp.css';
import ThemeContext from './ThemeContext';

export default function ReactContextApp() {
  const themeContext = useContext(ThemeContext);
  const [isLight] = useState(themeContext === 'light');

  return (
    <>
      <Header isLight={isLight} />
      <Button isLight={isLight} />
    </>
  );
}
