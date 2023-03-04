import React, { Component } from 'react';
import { Routes, Route} from 'react-router-dom';
import '../stylesheets/styles.css';
import { Login } from './Login.jsx';

function App() {
  return (
    <div className="router">
      <h1>Hello world!</h1>
      <Routes>
        <Route path='/' element={<Login />}/>
      </Routes>
  
    </div>
    
  );
}

export default App;