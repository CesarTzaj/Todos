import React, {useContext} from "react";
import  ReactDOM from "react-dom";
import { AddNewTodoButtons } from "../layout/AddNewTodoButton";
import {TodoContext} from '../context/DataProvider'

function AddTodo( ){
  const { 
    newTodoValue,
    onWrite
  } = useContext(TodoContext);

  return  ReactDOM.createPortal (
    <React.Fragment>
      <div className="background"></div>
      <section className={`information`}>
        <h2>New Task</h2>
        <div className="constainer">
          <textarea 
          placeholder="New Task" 
           onChange={onWrite}
           value={newTodoValue}
           ></textarea>
          <AddNewTodoButtons/>
        </div>
        <section className="ImgBackground"></section>
      </section>
    </React.Fragment>,
    document.querySelector('#addTodo')
  );
}

export { AddTodo };