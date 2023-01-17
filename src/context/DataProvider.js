import React, { createContext } from "react";
import { useLocalstore } from "../hooks/useLocalstore";

const TodoContext = createContext();

function DataProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalstore("TODOS_V1", []);
  const [searchValue, SetSearchValue] = React.useState("");
  const [openTodo, setTodo] = React.useState(false);
  const [newTodoValue, SetNewTodoValue] = React.useState("");
  function setAddStatus() {
    setTodo(!openTodo);
  }
  const totalTodos = todos.length;
  const todoCompleted = todos.filter((status) => !!status.completed).length;
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

  function onWrite(event) {
    SetNewTodoValue(event.target.value);
  }

  const unComplete = todos.filter((todo) => {
      
    return (!todo.completed )
   });

   const CompletedTodos = todos.filter((todo) => {
    return (todo.completed )
   })

  const GetCompleted = () => {
    const newTodos = [...CompletedTodos, ...unComplete];
    saveTodos(newTodos);
  };
  const GetUncompleted = () => {
    const newTodos = [...unComplete, ...CompletedTodos];
    saveTodos(newTodos);
  };

  const MarkComplete = (todoKey, status) => {
    const todoIndex = todos.findIndex((todo) => todo.key === todoKey);
    const newTodos = [...todos];
    todos[todoIndex].completed = status;
    console.log(newTodos);
    saveTodos(newTodos);
  };

  const Delete = (todoKey) => {
    const todoIndex = todos.findIndex((todo) => todo.key === todoKey);
    console.log(todoKey);
    console.log(todoIndex);
    const newTodos = [...todos];
    console.log(newTodos);
    newTodos.splice(todoIndex, 1);
    console.log(newTodos);
    saveTodos(newTodos);
  };
  function AddTodo(text) {
    const newTodos = [...todos];
    for (let i = 0; i < newTodos.length; i++) {
      newTodos[i].key = i;
    }
    newTodos.push({ text: text, completed: false, key: newTodos.length});
    saveTodos(newTodos);
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        searchValue,
        openTodo,
        totalTodos,
        todoCompleted,
        SearchedTodos,
        newTodoValue,
        SetNewTodoValue,
        MarkComplete,
        Delete,
        AddTodo,
        setAddStatus,
        SetSearchValue,
        saveTodos,
        onWrite,
        GetCompleted,
        GetUncompleted,        
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, DataProvider };
