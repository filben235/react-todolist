import React, { Component } from 'react';
import SignIn from '../SignIn';

export class Welcome extends Component {
  render() {
    return (
      <div style={welcomeStyle}>
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
