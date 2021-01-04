import React, {useState, createContext} from 'react'


//this component gives access to state by all children wrapped in <ContextProvider><ContextProvider/>
export const AppContext = createContext();

export function ContextProvider(props) {
  const [state, changeState] = useState(
    {
      activeUser: 'filip'
  });

  return (
    <AppContext.Provider value={[state, changeState]}>
      {props.children}
    </AppContext.Provider>
  )
}
