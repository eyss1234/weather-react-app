import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Search from './Search';
import App from './App';
import Weather from './Weather';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Weather
  city="London"
  currentTime="12:15 pm"
  currentDate="Friday, Sep "
  mainTemp={35}
/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
