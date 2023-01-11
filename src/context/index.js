import React,{createContext}from "react";
const TodoContext =  createContext();
function Provider(props){
  return(
    <TodoContext.Provider value={{

    }}>
      {props.children}

    </TodoContext.Provider>
  )
}

export {Provider}