import React from "react";
import { TodoContext } from "../context/DataProvider";

function FilterButtons() {
  return(
    <div>
      <input type="checkbox" defaultChecked="true"/>
      <input type="checkbox"/>
    </div>
  )
}
export {FilterButtons}