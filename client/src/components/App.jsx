import React, { Component } from 'react';
import { Routes, Route} from 'react-router';

import { Login } from './Login.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
      </div>
      /* This portion is used for react-router
      <>
        <Routes>
          <Route path='/' element={ <Login /> }/>
        </Routes>
      </>
      */
    );
  }
}

export default App;