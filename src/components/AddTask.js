import React, { useState } from "react";

const AddTask = ({addTask}) => {
    const [value,setValue]=useState("");
    const addItem = ()=>{
        addTask(value);
        setValue("");
    };
  return (
    <>
      <div className="inputContainer">
        <input type="text" className="input" 
        onChange={(e)=>{
            setValue(e.target.value)
        }} 
        value={value}
        placeholder="Add Task" />
        <button onClick={addItem} className="addButton">Add</button>
      </div>
    </>
  );
};

export default AddTask;
