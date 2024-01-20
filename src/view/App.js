import React from "react";
import {DataProvider} from "../context/DataProvider";
import TodoList from '../interface/TodoList.js'
// import { AddTodo } from "../interface/AddTodo";

function TaksList() {
  


  return (
    <DataProvider>
      
      <TodoList/>
      {/* <AddTodo/> */}
    </DataProvider>
  );
}


export { TaksList} ;





