import React, { useState, useContext } from "react";
import Todo, { NO_TODO_TEXT } from "./Todo.jsx";
import { Context } from "../Context.jsx";

export default function TodoContainer() {
  const [userInput, setUserInput] = useState("");
  const { taskList, setTaskList } = useContext(Context);

  const onChangeHandler = (e) => setUserInput(e.target.value);

  const removeTask = (key) => {
    setTaskList(taskList => taskList.filter((_, index) => key !== index))
 }

 const addTodoHandler = (e) => {
    e.preventDefault();
    if(e.key === 'Enter'){
        setTaskList([...taskList, userInput]);
        setUserInput("");
    }
}

  const noTaskHandler = (arr) => {
    if(arr.length === 0){
        return (<Todo todo={NO_TODO_TEXT} />);
    }else{
        return taskList.map((todo,index) => <Todo key={index} index={index} todo={todo} remove={removeTask}/>);
    }
}

  
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={userInput}
          onChange={onChangeHandler}
          onKeyUp={addTodoHandler}
        />
      </form>

      {noTaskHandler(taskList)}

      <p className="paper">{taskList.length} Items left</p>
    
    </>
  );
}