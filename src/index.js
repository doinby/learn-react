/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './fonts/MinigapLight.woff';
import './fonts/MinigapLight.woff2';
import './fonts/MinigapBold.woff';
import './fonts/MinigapBold.woff2';
import './index.css';
import {ThemeContextProvider} from './Apps/04-ReactContextAppCont/ThemeContext';
import ReactContextAppCont from './Apps/04-ReactContextAppCont/ReactContextAppCont';

// Alt way to write:
// const {Provider, Consumer} = ThemeContext

ReactDOM.render(
  <ThemeContextProvider>
    <ReactContextAppCont />
  </ThemeContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.clear();
