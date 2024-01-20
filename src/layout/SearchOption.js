import React, {useContext} from "react";
import { TodoContext } from "../context/DataProvider";

function SearchOption(){
  const { SetSearchValue} = useContext(TodoContext)
  const onSearchButon = (event)=>{
    SetSearchValue(event.target.value)
  }
  return (
  <section className='searchSection'>
    <input onChange={onSearchButon} placeholder="ToDo's"/>
 </section>
 );
}

export {SearchOption}