import React, { Component } from "react";
import FlipMove from "react-flip-move";
import {start, chooseday} from "./AccountPersonalization";
import {myDate} from "./Form";
 
class TodoItems extends Component {
  
  createTasks(item) {
    if (item.text != "") {
      
      return <li onClick={() => this.delete(item.key)} 
      key={item.key}>{item.text} on {item.day} at {item.starty}</li>
    }
  }
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }
  delete(key) {
    this.props.delete(key);
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};
 
export default TodoItems;