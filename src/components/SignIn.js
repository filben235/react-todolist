import React, { Component } from 'react';
import './Signin.css';

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  render() {
    return (
      <div className="signInWrapper">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Welcome</h2>
            <h4 className="animation a2">Log in to your account using email and password</h4>
          </div>
          <div className="form">
            <input type="email" className="form-field animation a3" placeholder="Email Address"/>
            <input type="password" className="form-field animation a4" placeholder="Password"/>
            <p className="animation a5"><a href="#">Forgot Password</a></p>
            <button className="animation a6">LOGIN</button>
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
}




export default SignIn
