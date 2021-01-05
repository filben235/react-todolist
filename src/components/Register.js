import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style/Register.css';

export default function Register() {
  //used for updating user name, email and password as it is being typed
  const [userName, setUserName] = useState('');
  const [signInEmail, setSigninEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  //used to route to different pages
  const history = useHistory();
  //redirects to main page
  function redirect() {
    history.push("/");
  }

  //updates name as it is being typed
  function onNameChange(event) {
    setUserName(event.target.value);
  }
  //updates email as it is being typed
  function onEmailChange(event) {
    setSigninEmail(event.target.value);
  }
  //updates password as it is being typed
  function onPasswordChange(event) {
    setSignInPassword(event.target.value);
  }

  //posts signin info to server
  function onSubmitSignIn() {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: userName,
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
    }
  return (
    <div className="registerWrapper">
      <div className="left">
        <div className="header-container">
          <h2 className="animation a1">Register your account</h2>
        </div>
        <div className="form">
          <input 
            type="userName" 
            className="form-field animation a2" placeholder="User Name"
            onChange={onNameChange}
          />
          <input 
            type="email" 
            className="form-field animation a3" placeholder="Email Address"
            onChange={onEmailChange}
          />
          <input 
            type="password" 
            className="form-field animation a4" placeholder="Password"
            onChange={onPasswordChange}
          />
          <button 
            onClick={onSubmitSignIn}
            className="animation a6">REGISTER
          </button>
          <p className="animation a5 login-button"><a href="#">Already have an account? Log in</a></p>
        </div>
      </div>
  </div>
  )
}

