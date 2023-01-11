import React from "react";
function TodoItem(props) {
  function done (){
   
  }
  
  return (
    <li >
      <span
       className={`material-symbols-outlined  ${props.completed && 'task-completed'} `}
       onClick={props.Markcomplete}
        
      >done</span>
      <p className={`${props.completed && 'task-completed'}`}>{props.text} </p>
      <span 
      className="material-symbols-outlined delete"
      onClick={props.Delete}
      >close</span>
    </li>
  );
}


export { TodoItem };
