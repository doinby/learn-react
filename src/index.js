import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import ToggleApp from './Apps/ToggleApp/ToggleApp';
import DataFetcherApp from './Apps/DataFetcherApp/DataFetcherApp';

ReactDOM.render(
  <React.StrictMode>
    <DataFetcherApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

console.clear();
