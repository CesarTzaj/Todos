import React, {useContext} from "react";
import { TodoContext } from "../context/DataProvider";

function SearchOption(){
  const { SetSearchValue,GetCompleted} = useContext(TodoContext)
  const onSearchButon = (event)=>{
    console.log(event.target.value);
    SetSearchValue(event.target.value)
  }
  return (
  <section className='searchSection'>
    <input onChange={onSearchButon} placeholder="ToDo's"/>
 </section>
 );
}

export {SearchOption}