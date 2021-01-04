import React, {useContext} from 'react';
import {AppContext} from './ContextProvider';

export default function Main() {
  const [state, changeState] = useContext(AppContext);

  return (
    <div>
      <h1>Hello {state.activeUser}</h1>
      {console.log(state.activeUser)}
    </div>
  )
}
