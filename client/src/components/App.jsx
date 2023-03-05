import React, { Component, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import '../stylesheets/styles.css';
import { Login } from './Login.jsx';
import { Signup } from './Signup.jsx';
import Landing from './Landing.jsx';

function App() {
  // const [token, setToken] = useState();
  // function setToken(userToken) {
  //   sessionStorage.setItem('token', JSON.stringify(userToken));
  // }

  // function getToken() {
  //   // const tokenString = sessionStorage.getItem('token');
  //   // const userToken = JSON.parse(tokenString);
  //   // return userToken?.token;
  // }

  // const token = getToken();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }


  return (
    <div className="router">

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path ='/signup' element={<Signup/>}/>
        <Route path ='/login' element={<Login/>}/>
      </Routes>
    </div>

  );
}

export default App;