import React,{useContext} from "react";

import { useCheck } from "../hooks/usCheck";

function FilterButtons() {

  const initialState = {
    pending: false,
    completed: false
  }
  const {handleClickBox, check} = useCheck(initialState)
  // console.log(check.pending);
  return (
    <form className="FilterSection">
      <div>
      <label htmlFor="pending">Peding</label>
      <input 
      type="checkbox"
      defaultChecked={check.pending} 
      id="pending"
       name="pending"
      onChange={handleClickBox}
       />
      </div>
      <div>
      <label htmlFor="completed">Completed</label>
      <input 
      type="checkbox"
       id="completed"
       name="completed"
       defaultChecked={check.completed}
       onChange={handleClickBox}
       />
      </div>
    </form>
  )
}
export {FilterButtons}