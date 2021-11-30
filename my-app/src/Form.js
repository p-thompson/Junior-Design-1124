import React, { useState,Component, useEffect  }  from 'react';
import Button from "@material-ui/core/Button";
import DatePicker from "react-datepicker";
import TimeRangePicker from '@wojtekmaj/react-timerange-picker'
import {FormControl} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import RaisedButton from 'material-ui/RaisedButton';
import date from "./AccountPersonalization";
import moment from "moment";
import Banner from 'react-js-banner';
import alert from 'alert';
import { useHistory} from "react-router-dom";
import {Alert} from '@mui/material';
import {myusername, myid} from './AccountPersonalization';
//import "./../../backend/src/main/java/com/village/rest/task";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export var title = "";
export var start = "";
export var end= "";
export var myDate = "";
export var day= "";



export class Form extends Component {
  constructor(props) {
    super(props);
    day = "";
    end = "";
    start = "";
    title = "";
    this.state = {
      day: "",
      value: "",
      start: "",
      end: "",
      time1: "",
      time2: "",
    };
    this.err = {
      msg: "",
      sev: "success",
      isVis: false,
    };
    /*
    this.task = {
      id = 0,
      usern = "",
      day = "",
      begin = "",
      end: "",
      type = "",
    }
    */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addDate = this.addDate.bind(this);
    
  }
  addDate(event) {
    this.setState({day: event.target.value});
  } 
  handleChange(event) {
    this.setState({value: event.target.value});  
  }
  handleAddTask() {
    const myTask = {
      "id": myid,
      "username": "janedoe34",
      "day": "Monday",
      "timeBegin": "11:31:00 AM",
      "timeEnd": "12:31:00 PM",
      "service": "BABYSIT",
    };
    /*
       TUTOR, 
    BABYSIT,
    TRANSPORTATION,
    NOTPROVIDED
    */
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(myTask)
    };
    fetch("http://localhost:8080/backend/rest/account/task/" + myusername, requestOptions)
      .then(res => res.json())
      .then((data) => {
          this.err.msg = "hi";
      })
      .catch(err => {
          console.log(err);
          throw new Error(err);
      })
  }
 
    /*
    const handleDelete = async (id) => {
    await fetch('http://localhost:3000/dashboard/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }  
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/dashboard')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])
  */

  handleSubmit(event) {
    if (this.state.value == "Choose" || !this.state.value) {
      this.err.isVis = true;
      this.err.msg = "Please choose a Title";
      this.err.sev="error";
    } else if (this.state.day == "Choose" || !this.state.day) {
      this.err.isVis = true;
      this.err.msg = "Please choose a Day";
      this.err.sev="error";
    }
    else if (this.state.start == "" || this.state.end == "") {
      this.err.isVis = true;
      this.err.msg = "Please choose a Time";
      this.err.sev="error";
    }
    else if (this.state.value != "Choose") {
      title = this.state.value;
      start = this.state.time1;
      end = this.state.time2;
      day = this.state.day;
      //day = day.substring(0, day.length - 1);
      event.preventDefault();
      this.err.isVis = true;
      //this.handleAddTask();

      const myTask = {
        
        "username": myusername,
        "day": day.substring(0, day.length - 1),
        "timeBegin": this.state.start.substring(0, this.state.start.length - 3) + ":00 " + this.state.start.substring(this.state.start.length - 2, this.state.start.length),
        "timeEnd": this.state.end.substring(0, this.state.end.length - 3) + ":00 " + this.state.end.substring(this.state.end.length - 2, this.state.end.length),
        "service": title.toUpperCase(),
      };
      /*
         TUTOR, 
      BABYSIT,
      TRANSPORTATION,
      NOTPROVIDED
      day.substring(0, day.length - 1)
      */
      //console.log(this.state.start.substring(0, start.length - 3) + ":00 " + this.state.start.substring(start.length - 2, start.length));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(myTask)
      };
      fetch("http://localhost:8080/backend/rest/account/task", requestOptions)
        .then(res => res.json())
        .then((data) => {
            this.err.msg = "hi";
        })
        .catch(err => {
            console.log(err);
            throw new Error(err);
        })
      this.err.sev="success";
      this.err.msg = "Task Added";
    } 

  }
  

  render() {
    
    return (
      <form style={{paddingLeft: 20}} onSubmit={this.handleSubmit}>
        
        <center><h2 style={{paddingBottom: 20, paddingRight: 10}}>Create New Task</h2></center>
        {this.err.isVis && this.err.msg && <Alert severity={this.err.sev}>{this.err.msg}</Alert>}
        <TableRow style={{width: 100, paddingRight: 0}}>
          <TableCell style={{paddingLeft: 20}}>
            <div  className="form-group">
              <tr>
                <label style={{paddingLeft: 43}}htmlFor="name">Title: </label>
                <th style={{paddingLeft: 16}}>
                  <select style={{width: 208, background:  "#E1EBEE"}} value={this.state.value} onChange={this.handleChange}> 
                    <option value="Choose">Choose...</option>    
                    <option value="Babysit">Babysitting</option>
                    <option value="Tutor">Tutoring</option>
                    <option value="Transportation">Transportation</option>
                  </select>
                </th>
              </tr>
            </div>
            <div style={{paddingTop: 10}} className="datepick">
              <tr >
                  <label style={{paddingLeft: 40}} >Date:   </label>     
                  <th style={{paddingLeft: 15, width: 220}}>
                    <select style={{width: 208, background:  "#E1EBEE"}} day={this.state.value} onChange={this.addDate}
                    
                    > 
                      <option day="Choose">Choose...</option>
                      <option day="Mon">Mondays</option>    
                      <option day="Tues">Tuesdays</option>
                      <option day="Weds">Wednesdays</option>
                      <option day="Thurs">Thursdays</option>
                      <option day="Fri">Fridays</option>
                      <option day="Sat">Saturdays</option>
                      <option day="Sun">Sundays</option>
                    </select>
                  </th>
              </tr>
            </div>
            <div style={{paddingTop: 10, paddingBottom: 45, paddingLeft: 40}} className="timepick">
              <tr>
                <label >Time:</label>
                <th style={{paddingLeft: 15}}>        
                  <FormControl>   
                    <TimeRangePicker 
                      id= "addtime"
                      disableClock= {true}
                      
                      onChange={(e) => {
                        if (e != null) {
                          var newtime  = "";
                          var newtime1 = "";
                          if (typeof e[0] === 'string') {
                            newtime = e[0];    
                           
                            this.state.time1 = e[0];
                            const hour = parseInt(newtime + "");
                            if (hour < 12) {
                              newtime += " AM";
                            } else {
                              newtime += " PM";
                            }
                            newtime1 = newtime;
                            if (hour < 10 && hour > 1) {
                              newtime = newtime.substring(1, newtime.length);;
                            } else if (hour < 1 && hour >= 0) {
                              newtime = "12" + newtime.substring(2, newtime.length);
                        
                            } else if (hour > 12) {
                              const newhour = (parseInt(newtime.substring(0,2))) - 12;
                              newtime = (newhour + "") + newtime.substring(2, newtime.length);
                             
                            }
                            this.state.start = newtime;
                            this.state.time1 = newtime;
                            var zero = "0";
                            this.state.start = zero.concat(this.state.start);
                           
                          } 
            
                          if ( (typeof e[1] === 'string')) {
                            newtime = e[1];   
               
                            this.state.time2 = e[1];
                            const hour = parseInt(newtime + "");
                            if (hour < 12) {
                              newtime += " AM";
                          
                            } else {
                              newtime += " PM";
                            }
                            newtime1 = newtime;
                            if (hour < 1 && hour >= 0) {
                              newtime = "12" + newtime.substring(2, newtime.length);
                         
                            } else if (hour > 12) {
                              const newhour = (parseInt(newtime.substring(0,2))) - 12;
                              newtime = (newhour + "") + newtime.substring(2, newtime.length);
                              
                            }
                            this.state.end = newtime;
                            this.state.time2 = newtime;
                            var zero = "0";
                            this.state.end = zero.concat(this.state.end);
                            
                          }

                        }
                        
                      }}
                      
                    />  
                </FormControl></th>
              </tr>
            </div>
          </TableCell>
          
        </TableRow>
        <div className="form-group">
          <MuiThemeProvider>
            <RaisedButton  backgroundColor='#0077c0' labelColor='white' variant="contained" fullWidth style={{margin: '15px 0'}} className="form-control btn btn-primary" type="submit">
              Submit
            </RaisedButton>
          </MuiThemeProvider>

        </div>
        
      </form>
    );

  }
  
};
export default Form;
