/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ReactContextAppCont from './Apps/04-ReactContextAppCont/ReactContextAppCont';

// Alt way to write:
// const {Provider, Consumer} = ThemeContext

ReactDOM.render(<ReactContextAppCont />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.clear();
