import React, { Component } from "react";

/* importing todo-add css */

import "./todo-add.css";

export default class TodoAdd extends Component {
state  = {
  label: '',
}

  onLabelChange = (event) => {
    this.setState(({
      label: event.target.value,
    }))
  };
  
  onSubmit = (event) =>{
    event.preventDefault()
    this.props.addItem(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <form className="todo-add " onSubmit = {this.onSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="New Task"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.onSubmit}
        >
          Add Task
        </button>
      </form>
    );
  }
}
