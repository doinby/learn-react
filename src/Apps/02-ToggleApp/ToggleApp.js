import React from 'react';
import './ToggleApp.css';
import Menu from './ToggleAppComponents/Menu';
import Favourite from './ToggleAppComponents/Favourite';

export default function ToggleApp() {
  return (
    <>
      <Menu />
      <hr />
      <Favourite />
    </>
  );
}

console.clear();
