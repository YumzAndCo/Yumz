import React, { useState} from 'react';
import styles from '../stylesheets/login.css';

async function signupUser(credentials) {
  return fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json());
}

export const Signup = ({setToken}) => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [zip, setZip] = useState();
  

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await signupUser({
      username,
      password,
      zip
    });
    setToken(token);
  };

  return(
    <div className="signup">
      <h1>Sign up here</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <label>
          <p>Zip Code</p>
          <input type="number" onChange={e => setZip(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};