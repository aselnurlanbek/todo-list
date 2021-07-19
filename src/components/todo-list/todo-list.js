import React from "react";
/* importing TodoListItem from todo-list-item*/
import TodoListItem from "../todo-list-item";

/* importing css */
import "./todo-list.css";

/*  */
const TodoList = ({ todoData, onDelete,  onLabelClick, onMarkImportant}) => {
  const newItem = todoData.map((item) => {
    const { key,...anotherElements } = item;
    return (
      <li key={key} className="list-group-item">
        <TodoListItem  {...anotherElements} 
        onDelete = {()=>{
          onDelete(key)
        }} 
         onLabelClick = {()=>{
          onLabelClick(key)
        }} 
        onMarkImportant= {()=>{
        onMarkImportant(key)}}
      
        />
      </li>
    );
  });

  return (
    <div className="todo-list">
      <ul className="list-group">{newItem}</ul>
    </div>
  );
};

export default TodoList;
