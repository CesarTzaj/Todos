import React from "react";
import  ReactDOM from "react-dom";
import { TodoContext } from "../context/DataProvider";
function AddTodoButton() {
  const {setAddStatus} = React.useContext(TodoContext)

  return ReactDOM.createPortal (
    <React.Fragment>
      <button className="AddTodoButton" 
     onClick={setAddStatus}
    >+</button>
    </React.Fragment>,
    document.querySelector('#Button')
  )
}

export {AddTodoButton}