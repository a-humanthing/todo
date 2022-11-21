import React, { useEffect, useState } from "react";
import ListTask from "./ListTask";
import AddTask from "./AddTask";
import "./Todo.css";
const Todo = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    document.title=`You have ${tasks.length} pending task(s)`
  })
  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  return (
    <>
      <div className="todoContainer">
        <div className="header">ToDo App</div>
        <div className="addTask">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <ListTask
              task={task}
              removeTask={removeTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
