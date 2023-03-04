import React, { Component, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import '../stylesheets/styles.css';
import { Login } from './Login.jsx';

function App() {
  const [token, setToken] = useState();
  // function setToken(userToken) {
  //   sessionStorage.setItem('token', JSON.stringify(userToken));
  // }
  
  // function getToken() {
  //   // const tokenString = sessionStorage.getItem('token');
  //   // const userToken = JSON.parse(tokenString);
  //   // return userToken?.token;
  // }

  // const token = getToken();

  if(!token) {
    return <Login setToken={setToken} />;
  }  
  
  
  return (
    <div className="router">
     
      <Routes>
        <Route path = '/' element={<h1>Welcome!</h1>}/>
          
        <Route path ='/dashboard'>
          <h1>Landing page!</h1>
        </Route>
        <Route path="*">
          <h1>You have landed on a page that doesnt exist</h1>
        </Route>

      </Routes>
    </div>
    
  );
}

export default App;