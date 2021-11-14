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
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export var title = "";
export var start = "";
export var end= "";
export var myDate = "";
export var day= new Date();



export class Form extends Component {
  //              <p>Your time is: {moment(startDate).format("LL")}</p>
  constructor(props) {
    super(props);
    day = new Date();
    end = "";
    start = "";
    title = "";
    this.state = {
      day: new Date(),
      value: "",
      start: "",
      end: "",
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  addDate(date) {
    this.setState({day: date});
  } 
  handleChange(event) {
    this.setState({value: event.target.value});  
  }
  handleSubmit(event) {
    if (title.value != "Choose") {
      title = this.state.value;
      start = this.state.start;
      end = this.state.end;
      day = this.state.day;
      console.log(this.state.title);
      event.preventDefault();
      window.alert("Task Added.");
    }

  }

  onTaskSubmit = () => {
    window.alert('New Task Added.');
   
    //date = moment(startDate).format("LL");
    //console.log(date);
  }
  render() {
    
    return (
      <form style={{paddingLeft: 30}} onSubmit={this.handleSubmit}>
        
        <center><h2 style={{}}>Create New Task</h2></center>
        <TableRow style={{width: 100, paddingRight: 0}}>
          <TableCell style={{paddingLeft: 20}}>
            <div  className="form-group">
              <tr>
                <label htmlFor="name">Title: </label>
                <th style={{paddingLeft: 10}}>
                  <select value={this.state.value} onChange={this.handleChange}> 
                    <option value="Choose">Choose...</option>    
                    <option value="Childcare">Childcare</option>
                    <option value="Tutoring">Tutoring</option>
                    <option value="Housework">Housework</option>
                    <option value="Carpooling">Carpooling</option>
                  </select>
                </th>
              </tr>
            </div>
            <div style={{paddingTop: 10}} className="datepick">
              <tr>
                <label >Date:   </label>
                <th style={{paddingLeft: 10}}>
                  <FormControl>
                    <DatePicker 
                      selected={ this.state.day }
                      dateFormat="MM/dd/yyyy"
                      onChange={(e) => this.addDate(e)}
                    />
                  </FormControl>
                </th>
              </tr>
            </div>
            <div style={{paddingTop: 10}} className="timepick">
              <tr>
                <label >Time:</label>
                <th style={{paddingLeft: 25}}>        
                  <FormControl>   
                    <TimeRangePicker 
                      id= "addtime"
                      disableClock= {true}
                      
                      onChange={(e) => {
                        if (e != null) {
                          var newtime  = "";
                          if (typeof e[0] === 'string') {
                            newtime = e[0];       
                          } else {
                            newtime = e[1];
                          }
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
