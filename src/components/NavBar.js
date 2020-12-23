import { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    if (this.props.isSignedIn) {
        return(
          <nav style={navStyle}>
            <Link to="/">sign out</Link> 
          </nav>
        );
    } else {
      return (
        <nav style={navStyle}>
          <Link to="/signin">sign in</Link>
          <Link to="/register">register</Link>
        </nav>
      )
    }
  }
}

const navStyle = {
  color: '#black'
}

export default NavBar
