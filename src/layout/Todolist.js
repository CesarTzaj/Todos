import React from "react";

function Todolist(props){
 return ( 

  <ul>
    {props.children}
  </ul>
)
}

export {Todolist};