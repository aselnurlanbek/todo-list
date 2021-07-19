import React from "react";

import "./todo-status.css";

const ToDoStatus = ({todoCount,doneCount}) => {
  return (
    <div className="title todo-status">
      to do <span>{todoCount}</span>, done <span>{doneCount}</span>
    </div>
  );
};

export default ToDoStatus;
