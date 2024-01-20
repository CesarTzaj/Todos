import {useState, useContext} from "react"
import { TodoContext } from "../context/DataProvider";

export function useCheck(status){
  const {GetCompleted,
    GetUncompleted,
    SearchedTodos,
  } = useContext(TodoContext)
  
const [check, setCheck]= useState(status)

  function handleClickBox({target}){
    
    setCheck({
      ...check,
      [target.name]: !check[target.name]
    })
    if (target.name ==='completed' && !check.completed   ) {
      GetCompleted()
    }else{
      GetUncompleted()
    }

  }
return {handleClickBox, check}
}
