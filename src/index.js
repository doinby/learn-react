/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactContextApp from './Apps/ReactContextApp/ReactContextApp';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ThemeContext from './Apps/ReactContextApp/ThemeContext';

// Alt way to write:
// const {Provider, Consumer} = ThemeContext

ReactDOM.render(
  <ThemeContext.Provider value={'dark'}>
    <ReactContextApp />
  </ThemeContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// console.clear();
