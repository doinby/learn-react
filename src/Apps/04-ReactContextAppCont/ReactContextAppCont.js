import React from 'react';
import Button from './components/Button';
import Header from './components/Header';
import ThemeContext from './ThemeContext';
import './ReactContextAppCont.css';

export default function ReactContextAppCont() {
  return (
    <>
      <Header />

      {/* This button change with the theme */}
      <ThemeContext.Consumer>
        {(theme) => <Button theme={theme} display='Themed Button' />}
      </ThemeContext.Consumer>

      <br />

      {/* This button doesn't change with the theme */}
      <Button display='Non-themed Button' />
    </>
  );
}

// console.clear();
