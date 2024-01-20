import React, {useEffect, useRef} from "react";

function Todolist(props){



 return ( 

  <section >
    <ul >
    {props.children}
  </ul>
  </section>
)
}

export {Todolist};