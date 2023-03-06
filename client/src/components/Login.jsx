import React, { useState } from 'react';
import styles from '../stylesheets/login.css';

async function loginUser(credentials) {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json());
}


// This entire portion is used for react-router setup
export const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = async e => {
    e.preventDefault();
    await loginUser({
      email,
      password
    });
    
  };

  return (
    <div className="login">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

