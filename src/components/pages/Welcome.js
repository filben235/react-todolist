import React, { Component } from 'react';
import SignIn from '../SignIn';

export class Welcome extends Component {
  render() {
    return (
      <div style={welcomeStyle}>
        <h1>moro</h1>
        <SignIn />
      </div>
    )
  }
}

const welcomeStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}
export default Welcome
