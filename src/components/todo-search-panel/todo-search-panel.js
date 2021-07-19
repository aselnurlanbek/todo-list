import React, { Component } from "react";
// import ListFilter from "../list-filter";

import "./todo-search-panel.css";

export default class SearchPanel extends Component {
  state = {
    searchElement : '',
  };

  buttons = [
    {name:'all'},
    {name:'active'},
    {name:'done'},
    {name:'important'}];


  onSearchChange = (event) => {
    const label = event.target.value;
    this.setState({searchElement:label});
    this.props.onSearchChange(label);
  };

  render() {
   
    const {filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({name})=>{
      const isActive = filter === name
      const newClass = isActive ? 'btn-primary':'btn-outline-secondary' 
      return <button className={`btn ${newClass}` } key={name} onClick={()=>{onFilterChange(name)}}>{name}</button>
    })

    return (
      <div className="search-panel">
        <input
          placeholder="search"
          className="form-control"
          onChange={this.onSearchChange}
        />
        <div className="list-filter">
          {buttons}
        </div>
      </div>
    );
  }
}
