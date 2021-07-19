import React, { Component } from "react";
import Header from "../todo-header";
import SearchPanel from "../todo-search-panel";
import TodoList from "../todo-list";
import TodoAdd from "../todo-add";

/* importing app css */
import "./app.css";

export default class App extends Component {
  keyNumber = 1;
  /* creating tasks data */

  state = {
    data: [
      this.createItem("create plans for this month"),
      this.createItem("learn react"),
      this.createItem("create app"),
      this.createItem("create new app"),
    ],
    searchElement: "",
    filter: "all", //* all,active,done,important*//
  };

  //* create a new element
  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      key: this.keyNumber++,
    };
  }

  //* delete item
  deleteItem = (key) => {
    this.setState(({ data }) => {
      const indexItem = data.findIndex((item) => {
        return item.key === key;
      });
      const newArr = [
        ...data.slice(0, indexItem),
        ...data.slice(indexItem + 1),
      ];
      return {
        data: newArr,
      };
    });
  };

  //* marking done
  onLabelClick = (key) => {
    this.setState(({ data }) => {
      const indexItem = data.findIndex((item) => {
        return item.key === key;
      });
      const oldItem = data[indexItem];
      const newObj = { ...oldItem, done: !oldItem.done };
      const newArr = [
        ...data.slice(0, indexItem),
        newObj,
        ...data.slice(indexItem + 1),
      ];

      return {
        data: newArr,
      };
    });
  };

  //* marking important
  onMarkImportant = (key) => {
    this.setState(({ data }) => {
      const indexItem = data.findIndex((item) => {
        return item.key === key;
      });

      const oldItem = data[indexItem];

      const newObj = { ...oldItem, important: !oldItem.important };

      const newArr = [
        ...data.slice(0, indexItem),
        newObj,
        ...data.slice(indexItem + 1),
      ];
 

      return {
        data: newArr,
      };
    });
  };

  //* add item to tasks
  addItem = (label) => {
    const newItem = {
      label,
      important: false,
      done: false,
      key: this.keyNumber ++ ,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return { data: newArr };
    });
  };

  //* search element in tasks
  search(items, searchElement) {
    if (!searchElement) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(searchElement.toLowerCase()) > -1;
    });
  }

  //* changing the searching keyword
  onSearchChange = (label) => {
    this.setState({ searchElement: label });
  };

  //*filter
  filter = (items, filter) => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      case "important":
        return items.filter((item) => item.important);
      default:
        return items;
    }
  };

  //* changing the filter value
  onFilterChange = (filterLabel) => {
    this.setState({ filter: filterLabel });
  };

  render() {
    const { data, searchElement, filter } = this.state;
    const visibleState = this.filter(this.search(data, searchElement), filter);
    const doneCount = data.filter((item) => item.done).length;
    const todoCount = data.length - doneCount;

    return (
      <div className="app container">
        {/*to do list Header}  */}
        <Header doneCount={doneCount} todoCount={todoCount} />
        {/* to do list SearchPanel */}
        <SearchPanel
          onSearchChange={this.onSearchChange}
          onFilterChange={this.onFilterChange}
          filter={filter}
        />

        <TodoList
          todoData={visibleState}
          onDelete={this.deleteItem}
          onLabelClick={this.onLabelClick}
          onMarkImportant={this.onMarkImportant}
        />
        {/* adding a new task  */}
        <TodoAdd addItem={this.addItem} />
      </div>
    );
  }
}
