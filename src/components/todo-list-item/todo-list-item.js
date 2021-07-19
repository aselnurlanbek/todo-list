import React, { Component } from "react";

import "./todo-list-item.css";

export default class ToDoListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onLabelClick,
      onMarkImportant,
      done,
      important,
    } = this.props;

    // // console.log({index})
    let classNameItem = "todo-list-item";
    if (done) {
      classNameItem += " done";
    }

    if (important) {
      classNameItem += " important";
    }

    return (
      <span className={classNameItem}>
        <span className="todo-list-item-label" onClick={onLabelClick}>
          {label}
        </span>
        <div>
          <button
            className="btn btn-outline-success sm"
            onClick={onMarkImportant}
          >
            <i className="fas fa-exclamation"></i>
          </button>
          <button className="btn btn-outline-danger sm" onClick={onDelete}>
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
      </span>
    );
  }
}
