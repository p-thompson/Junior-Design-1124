import React, { Component } from "react";
import TaskItems from "./TaskItems";
import "./Tasks.css";
import {title, start, end, day} from "./Form";
import moment from "moment";
import { Container } from './Container';
class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  onSubmit = (event) => {
    event.preventDefault(event);
  };

  addItem(e) {
    var newItem = {
      text: title,
      day: moment(day).format("LL"),
      starty: start,
      key: Date.now()
    };
 
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
     
    console.log(this.state.items);
    console.log(title);
       
    e.preventDefault();
  }
  
  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
    this.setState({
      items: filteredItems
    });
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <Container triggerText={"Add Task"}  />
          </form>
        </div>
        <TaskItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    );
  }
}
 
export default Tasks;