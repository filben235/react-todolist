import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>todolist</h1>
      <Link to="/">home</Link> | <Link to="/about">about</Link>
    </header>
  )
}

const headerStyle = {
  textAlign: 'center',
  padding: '3vh 0 3vh'
}
