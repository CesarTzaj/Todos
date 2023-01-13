import React from "react";
import { TodoContext } from "../context/DataProvider";
function TodoItem(props) {
  const { MarkComplete,
    Delete,
    SearchedTodos
  } = React.useContext(TodoContext)

    function TodoStatus(){
      MarkComplete(props.text, !props.completed)
    }
  return (
    <li >
      <span
       className={`material-symbols-outlined  ${props.completed && 'task-completed'} `}
       onClick={TodoStatus}
        
      >done</span>
      <p className={`${props.completed && 'task-completed'}`}>{props.text} </p>
      <span 
      className="material-symbols-outlined delete"
      onClick={()=> Delete(props.text)}
      >close</span>
    </li>
  );
}


export { TodoItem };
