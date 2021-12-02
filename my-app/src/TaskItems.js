import React, { Component } from "react";
import FlipMove from "react-flip-move";
import {myusername} from "./AccountPersonalization";
 
let globalHistory = null;
class TodoItems extends Component {
  constructor(props) {
    super(props);
    globalHistory = props.history; 
    this.state = {
      items: []
    };
    fetch("http://localhost:8080/backend/rest/account/task" + myusername)
    .then(res => res.json())
    .then((data) => {
        this.setState({items: data});
        console.log(this.items);
        //setUserInfo(new Map(userInfo.set("task",data)))
    })
    /*
    if (globalHistory) {
      this.state.items = globalHistory.location.state.get("task");
      console.log(this.state.items);
    }
    */
    this.createTasks = this.createTasks.bind(this);
  }
  
  
  createTasks(item) {
    console.log(this.state.items);
    /*
    if (item.text != "") {
      
      return <li onClick={() => this.delete(item.key)} 
      key={item.key}>{item.text} on {item.day} at {item.starty}</li>
    }
    */
  }
  
  delete(key) {
    this.props.delete(key);
  }
 
  render() {
    //var todoEntries = this.props.entries;
    //var listItems = this.state.items.map(this.createTasks);
    //{listItems}
 
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          
        </FlipMove>
      </ul>
    );
  }
};
 
export default TodoItems;