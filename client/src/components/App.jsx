import React, { Component, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import '../stylesheets/styles.css';
import { Login } from './Login.jsx';
import { Signup } from './Signup.jsx';
import Landing from './Landing.jsx'

function App() {
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }


  return (
    <div className="router">

      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Landing />} />

      </Routes>
    </div>

  );
}

export default App;