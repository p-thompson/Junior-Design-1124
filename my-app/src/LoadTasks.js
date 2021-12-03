import { useHistory } from "react-router";
import {Grid, Paper, Avatar, Button, Box} from "@material-ui/core";
import "./Form";
import { MuiThemeProvider } from "material-ui/styles";
import FlipMove from "react-flip-move";
import { useState } from "react";

function CreateTask(props) {
  console.log(props);
  //const title = (props.task.service);
  //title = title.substring(0,1) + title.substring(1,title.length())
  const title = (props.task.service).substring(0,1) + props.task.service.toLowerCase().substring(1, (props.task.service).length);
  
  var start = (props.task.timeBegin).substring(0,5) + (props.task.timeBegin).substring(8, props.task.timeBegin.length);
  if (start.substring(0,1) == '0') {
    start = start.substring(1, start.length);
  }
  return(
    <Grid>
      <Paper>
        <li className="entry">{title} on {props.task.day} at {start}</li>
      </Paper>
    </Grid>
  )
 
}

function LoadTasks({ note}) {
  const history = useHistory();
  const tasks = history.location.state.get("task");
  //const [itemList, setItemList] = useState([]);
  const [itemList, setItemList] = useState([]);
  tasks.forEach((item, index) => {
    itemList.push(<CreateTask task={item}/>);
    //console.log(item);
  })
  return (
    <div className="todoListMain">
      <div className="header">
        <ul style={{paddingLeft: 45, width: 490}} className="theList">
          <FlipMove duration={250} easing="ease-out">
            {itemList}
          </FlipMove>
        </ul>
      </div>
      
    </div>
  
  );
}
export default LoadTasks;