import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NO_TODO_TEXT = "No tasks..."

export default function Todo(props) {
  const { todo, remove, index } = props;
  const [showDelete, setShowDelete] = useState(false);
  const isNoTodoText = todo === NO_TODO_TEXT;

  return (
    <div
      className="toDo d-flex justify-content-between"
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      
    >
      <Link to={`/todo/${index}`}>
        <div >
          <p className="task">{todo}</p>
        </div>
      </Link>

      {(!isNoTodoText && showDelete) && 
      (<p className='delete' onClick={() => remove(index)}>
        X
        </p>)}
    </div>
  );
}