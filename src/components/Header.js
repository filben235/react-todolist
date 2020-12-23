import React from 'react';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>todolist</h1>
    </header>
  )
}

const headerStyle = {
  textAlign: 'center',
  padding: '3vh 0 3vh'
}
