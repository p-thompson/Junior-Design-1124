import { useHistory } from "react-router";
import {Grid, Paper, Avatar, Button, Box} from "@material-ui/core";
import "./Form";
import { MuiThemeProvider } from "material-ui/styles";
import FlipMove from "react-flip-move";
import { useState } from "react";
import RaisedButton from 'material-ui/RaisedButton';

/*
function CreateTask(props) {
  //const title = (props.task.service);
  //title = title.substring(0,1) + title.substring(1,title.length())
  var title = (props.task.service).substring(0,1) + props.task.service.toLowerCase().substring(1, (props.task.service).length); 
  if (title.substring(0,1) == "B" || title.substring(0,2) == "Tu") {
    title = title + "ing";
  }
  var start = (props.task.timeBegin).substring(0,5) + (props.task.timeBegin).substring(8, props.task.timeBegin.length);
  const day = (props.task.day).substring(0,1) + (props.task.day).substring(1,props.task.day.length).toLowerCase();
  if (start.substring(0,1) == '0') {
    start = start.substring(1, start.length);
  }
  return(
    <Grid>
      <Paper>
        <li className="entry">{title} on {day} at {start}</li>
      </Paper>
    </Grid>
  )
 
}
*/
function LoadTasks() {
  const history = useHistory();
  //const tasks = history.location.state.get("task");
  var [listItems, setListItems] = useState([]);
  const deleteItem = (item) => {
    console.log(item.id);
    const newTasks = history.location.state.get("task").filter(el => el.id != item.id);
    
    history.location.state.set(new Map(history.location.state.set("task", newTasks)));
    console.log(history.location.state.get("task"));
    setListItems(history.location.state.get("task"));
    /*
    const newtasks = tasks;
    const left = newtasks.slice(0, index);
    const right = newtasks.slice(index + 1, newtasks.length);
    history.location.state.set(new Map(history.location.state.set("task", left.concat(right))))
    */
  }
  listItems = history.location.state.get("task").map((item, index) =>
      <li onClick={() => deleteItem(item)} >{(item.service).substring(0,1) + item.service.toLowerCase().substring(1, (item.service).length) + (item.service.substring(0,1) == "B" ? "ting" : "")} on 
      {" " + (item.day).substring(0,1) + (item.day).substring(1,item.day.length).toLowerCase()} at 
      {" "  + (item.timeBegin.substring(0,1) != '0' ? item.timeBegin.substring(0,1) : "") + (item.timeBegin).substring(1,5) + (item.timeBegin).substring(8, item.timeBegin.length)}
      </li>
  );

  return (
    <div className="todoListMain">
      <div className="header">
        <ul style={{paddingLeft: 45, width: 490}} className="theList">
          <FlipMove duration={250} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>
      </div>
      
    </div>
  
  );
}
export default LoadTasks;