import React, { Component } from 'react';

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  render() {
    return (
      <form style={signInStyle}>
        <input 
          type="email" 
          name="email" 
          placeholder="enter email"
        />
        <input 
          type="password" 
          name="password" 
          placeholder="enter password"
        />
        <input 
          type="submit" 
          value="submit"
          className="btn"
        />
        <button>Register</button>
      </form>
    )
  }
}

const signInStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

export default SignIn
