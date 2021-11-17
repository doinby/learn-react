import React from 'react';
import Button from './components/Button';
import Header from './components/Header';
import './ReactContextAppCont.css';
import { ThemeContextConsumer } from './ThemeContext';

export default function ReactContextAppCont() {
  return (
    <>
      <Header />

      {/* This button change with the theme */}
      <ThemeContextConsumer>
        {(provObject) => {
          const { theme, toggleTheme } = provObject;
          return <Button theme={theme} display='Themed Button' onCLick={toggleTheme} />;
        }}
      </ThemeContextConsumer>

      <br />

      {/* This button doesn't change with the theme */}
      <Button display='Non-themed Button' />
    </>
  );
}

// console.clear();
