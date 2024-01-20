import React, {useEffect, useRef, useState} from "react";
import { TodoCounter } from "../layout/TodoCounter.js";
import { SearchOption } from "../layout/SearchOption.js";
import { Todolist } from "../layout/Todolist.js";
import { TodoItem } from "../layout/TodoItems.js";
import {TodoContext} from "../context/DataProvider.js";
import { AddTodoButton } from "../layout/Addbutton.js";
import { AddTodo } from "./AddTodo.js";
import { FilterButtons } from "../layout/FilterTodo.js";
function TodoList() {
  const {
    error,
    loading,
    SearchedTodos,
    openTodo,
  } = React.useContext(TodoContext);

  const [hieght, setHieght] = useState(null);
  const miElementoRef = useRef(null);
  
  
  useEffect(() => {
    if (miElementoRef.current) {
      setHieght( miElementoRef.current.clientHeight)
    }
  }, [SearchedTodos.length]); 
  return (
    <React.Fragment>
    <section className={`container scroll ${hieght <= 572 && 'hide-scroll' }`}  ref={miElementoRef}>
      <TodoCounter  />
      <SearchOption
      />
      <FilterButtons/>
      <Todolist 
        setHieght={setHieght}
        hieght={hieght}
      >
        {error && <p className="estado" >Error 404...</p>}
        {loading && <p className="estado">Estamos Cargando....</p>}
        {(!loading && !SearchedTodos.length) && <p className="estado">¡creat el primer todo!</p>}
        {SearchedTodos.map((todo) => {
          return (
            <TodoItem
              text={todo.text}
              key={todo.key}
              completed={todo.completed}
              key2={todo.key}
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
