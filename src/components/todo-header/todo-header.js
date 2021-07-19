import React from "react";

import ToDoStatus from "../todo-status";

import "./todo-header.css";

const Header = ({todoCount,doneCount}) => {
  return (
    <div className="todo-header">
      <h1 className="title">To Do List</h1>
      <ToDoStatus todoCount={todoCount} doneCount={doneCount} />
    </div>
  );
};

export default Header;
