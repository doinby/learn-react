/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './fonts/MinigapLight.woff';
import './fonts/MinigapLight.woff2';
import './fonts/MinigapBold.woff';
import './fonts/MinigapBold.woff2';
import './index.css';
import ReactContextAppContCont from './Apps/05-ReactContextAppContCont/ReactContextAppContCont';
import UserContext from './Apps/05-ReactContextAppContCont/UserContext'

// Alt way to write:
// const {Provider, Consumer} = ThemeContext

ReactDOM.render(
  <UserContext.Provider value='user123'>
    <ReactContextAppContCont />
  </UserContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.clear();
