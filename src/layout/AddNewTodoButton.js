import React, { useContext } from "react";
import { TodoContext } from "../context/DataProvider";

function AddNewTodoButtons() {
  const { 
    newTodoValue,
    AddTodo, 
    setAddStatus,
  } = useContext(TodoContext);


  function SaveTodo() {
    if (newTodoValue != "") {
      AddTodo(newTodoValue);
      setAddStatus();
    }
    
  }

  return (
    <React.Fragment>
      <div className="SaveButtons">
        <button
          type="button"
          onClick={() => {
            setAddStatus();
          }}
          className="button"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={() => {
            SaveTodo();
          }}
          className="button primary"
        >
          Add
        </button>
      </div>
    </React.Fragment>
  );
}

export { AddNewTodoButtons };
