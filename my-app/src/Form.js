import React, { useState,Component  }  from 'react';
import Button from "@material-ui/core/Button";
import DatePicker from "react-datepicker";
import TimeRangePicker from '@wojtekmaj/react-timerange-picker'
import {FormControl} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Checkbox } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import RaisedButton from 'material-ui/RaisedButton';
import date from "./AccountPersonalization";
import moment from "moment";
import Banner from 'react-js-banner';
import alert from 'alert';
import {Alert} from '@mui/material';
//import "./../../backend/src/main/java/com/village/rest/task";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export var title = "";
export var start = "";
export var end= "";
export var myDate = "";
export var day= "";



export class Form extends Component {
  //              <p>Your time is: {moment(startDate).format("LL")}</p>
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
    };
    this.err = {
      msg: "",
      sev: "success",
      isVis: false,
      
      
    };
    
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
 
  
  handleSubmit(event) {
    if (this.state.value == "Choose" || !this.state.value) {
      this.err.isVis = true;
      this.err.msg = "Please choose a Title";
      this.err.sev="error";
    }
    else if (this.state.value != "Choose") {
      title = this.state.value;
      start = this.state.start;
      end = this.state.end;
      day = this.state.day;
      console.log(this.state.title);
      event.preventDefault();
      this.err.isVis = true;
      this.err.sev="success";
      this.err.msg = "Task Added";

    } 

  }

  onTaskSubmit = () => {
    
   
    //date = moment(startDate).format("LL");
    //console.log(date);
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
                    <option value="Childcare">Babysitting</option>
                    <option value="Tutoring">Tutoring</option>
                    <option value="Carpooling">Transportation</option>
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
                          if (typeof e[0] === 'string') {
                            newtime = e[0];       
                            const hour = parseInt(newtime + "");
                            if (hour < 12) {
                              newtime += " AM";
                            } else {
                              newtime += " PM";
                            }
                            if (hour < 10 && hour > 1) {
                              newtime = newtime.substring(1, newtime.length);;
                            } else if (hour < 1 && hour >= 0) {
                              newtime = "12" + newtime.substring(2, newtime.length);
                            } else if (hour > 12) {
                              const newhour = (parseInt(newtime.substring(0,2))) - 12;
                              newtime = (newhour + "") + newtime.substring(2, newtime.length);
                            }
                            this.state.start = newtime;
                          } 
                          if ( (typeof e[1] === 'string')) {
                            this.state.end = e[1];
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
            <RaisedButton  backgroundColor='#0077c0' labelColor='white' variant="contained" fullWidth style={{margin: '15px 0'}} className="form-control btn btn-primary" onSubmit={this.onTaskSubmit} type="submit">
              Submit
            </RaisedButton>
          </MuiThemeProvider>

        </div>
        
      </form>
    );

  }
  
};
export default Form;
