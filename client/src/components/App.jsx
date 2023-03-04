import React, { Component, useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { Login } from './Login.jsx';
import Landing from './Landing.jsx';

const App = () => {

  return (
    // <div>
    //   <h1>Hello world!</h1>
    // </div>
    /* This portion is used for react-router */
    <>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;