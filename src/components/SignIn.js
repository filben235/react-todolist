import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style/Signin.css';

export default function SignIn() {
  //used for updating email and password as it is being typed
  const [signInEmail, setSigninEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  //used to route to different pages
  const history = useHistory();
  //redirects to main page
  function redirect() {
    history.push("/main");
  }

  //updates email as it is being typed
  function onEmailChange(event) {
    setSigninEmail(event.target.value);
  }
  //updates password as it is being typed
  function onPasswordChange(event) {
    setSignInPassword(event.target.value);
  }

  //handles server request for signing in and calls redirect if matches with database
  function onSubmitSignIn() {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      })
    })
      .then(response => response.json())
      .then(data => {
        if(data.email === signInEmail) {
          redirect();
        }
      })
    }

  return (
    <div className="signInWrapper">
      <div className="left">
        <div className="header-container">
          <h2 className="animation a1">Welcome</h2>
        </div>
        <div className="form">
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
          <p className="animation a5 forgot-button"><a href="#">Forgot Password</a></p>
          <button 
            onClick={onSubmitSignIn}  
            className="animation a6">LOGIN
          </button>
          <p className="animation a5 register-button"><a href="#">No account? Register now!</a></p>
        </div>
      </div>
      <div className="right animation a6">
        <div className="text">
          <p>Organize it all with</p>
          <h1>Onelist</h1>
        </div>
      </div>
  </div>
  )
}





