import React from "react";
import { TodoContext } from "../context/DataProvider.js";

function TodoCounter() {
  return (
    <TodoContext.Consumer>
      {({ todoCompleted,
        totalTodos }) => (
        <React.Fragment>

          <h2>My tasks</h2>
          <p className="trackingTask">You've completed {todoCompleted} out of {totalTodos}</p>
        </React.Fragment>
      )}

    </TodoContext.Consumer>

  )
}
export { TodoCounter }
