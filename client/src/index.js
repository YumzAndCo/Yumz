import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx';
import './stylesheets/styles.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

/* This portion is used for react-router */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);