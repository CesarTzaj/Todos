import React from "react";
import { TodoCounter } from "../layout/TodoCounter.js";
import { SearchOption } from "../layout/SearchOption.js";
import { Todolist } from "../layout/Todolist.js";
import { TodoItem } from "../layout/TodoItems.js";
import {TodoContext} from "../context/DataProvider.js";
import { AddTodoButton } from "../layout/Addbutton.js";
import { AddTodo } from "./AddTodo.js";

function TodoList() {
  const {
    error,
    loading,
    SearchedTodos,
    openTodo,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
    <section className="container">
      <TodoCounter  />
      <SearchOption
      />
      <Todolist>
        {error && <p className="estado" >Error 404...</p>}
        {loading && <p className="estado">Estamos Cargando....</p>}
        {(!loading && !SearchedTodos.length) && <p className="estado">¡creat el primer todo!</p>}
        {SearchedTodos.map((todo) => {
          return (
            <TodoItem
              text={todo.text}
              key={todo.key}
              completed={todo.completed}

            />
          );
        })}
      </Todolist>
      <AddTodoButton/>
    </section>
    {!!openTodo && (
      <AddTodo >
      </AddTodo>
    )}
  </React.Fragment>
  );
   
}

export default TodoList
