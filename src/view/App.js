import React from "react";
import {DataProvider} from "../context/DataProvider";
import {AddTodo} from '../interface/AddTodo.js'
import TodoList from '../interface/TodoList.js'


function TaksList() {
  


  return (
    <DataProvider>
      
      <TodoList/>
      {/* <AddTodo/> */}
    </DataProvider>
  );
}


export { TaksList} ;





