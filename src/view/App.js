import React from "react";
import { TodoCounter } from "../layout/TodoCounter.js";
import { SearchOption } from "../layout/SearchOption.js";
import { Todolist } from "../layout/Todolist.js";
import { TodoItem } from "../layout/TodoItems.js";
import {useLocalstore} from "../hooks/useLocalstore.js";


function TaksList() {
  
  const {item: todos,
    saveItem: saveTodos,
    loading,
    error,
    } = useLocalstore('TODOS_V1',[])
  const [searchValue, SetSearchValue] = React.useState('');

  const totalTodos = todos.length;
  const todoCompleted = todos.filter(status=>!!status.completed).length
  let SearchedTodos = [];

  if (searchValue.length <= 1) {
    SearchedTodos = todos;
  } else {
    SearchedTodos = todos.filter((todo) => {
      let searchResult = searchValue.toLowerCase();
      let todosLowercase = todo.text.toLowerCase();
      return todosLowercase.includes(searchResult);
    });
  }

  const MarkComplete = (todoKey) => {
    const todoIndex = todos.findIndex((todo) =>todo.text === todoKey);
    const newTodos = [...todos];
    todos[todoIndex].completed = true;
    console.log(todos);
    saveTodos(newTodos);
  };

  const Delete = (todoKey) => {
    const todoIndex = todos.findIndex((todo) => {
      return todo.text === todoKey;
    });
    const newTodos = [...todos];
    newTodos.splice(newTodos[todoIndex], 1);
    saveTodos(newTodos);
  };

  return (
    <React.Fragment>
      <NewTaks />
      <section>
        <TodoCounter totalTodos={totalTodos} completed={todoCompleted} />
        <SearchOption
          searchValue={searchValue}
          SetSearchValue={SetSearchValue}
        />
        <Todolist>
          {error && <p className="estado" >Error 404...</p>}
          {loading && <p className="estado">Estamos Cargando....</p>}
          {(!loading && !SearchedTodos.length) && <p className="estado">¡creat el primer todo!</p>}
          {SearchedTodos.map((todo) => {
            return (
              <TodoItem
                text={todo.text}
                key={todo.text}
                completed={todo.completed}
                Markcomplete={() => MarkComplete(todo.text)}
                Delete={() => Delete(todo.text)}
              />
            );
          })}
        </Todolist>
      </section>
    </React.Fragment>
  );
}
function NewTaks() {

  const {item: todos, saveItem: saveTodos, loading, } = useLocalstore('TODOS_V1',[])
  function AddTask(text) {
    const newTodos = [...todos];
    newTodos.push({text:text, completed:false});
    console.log(newTodos);
    saveTodos(newTodos)
  }
  return (
    <React.Fragment>
      <form>
        <h2>New Task</h2>
        <div>
          <textarea placeholder="New Task"></textarea>
          <button 
          type="button"
          // type="submit"
          onClick={() => AddTask("soy cesar")} className="button">
            Add
          </button>
        </div>
        <section className="ImgBackground"></section>
      </form>
    </React.Fragment>
  );
}
function Prueba() {
  console.log('hola');
  return (
    <section></section>
  )
}
export { TaksList, Prueba, NewTaks} ;





