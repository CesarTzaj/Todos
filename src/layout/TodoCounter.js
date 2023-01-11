import React from "react";

function TodoCounter ({completed, totalTodos}){
  return (
    <React.Fragment>
      <h2>My tasks</h2>
      <p className="trackingTask">You've completed {completed} out of {totalTodos}</p>
    </React.Fragment>
  )
}
export  {TodoCounter}
