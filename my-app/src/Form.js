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
import date from "./AccountPersonalization";
import moment from "moment";
export var title = "";
export var start = "";
export var end= "";
export var myDate = "";
export var day= new Date();

const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];
export class Form extends Component {
  //              <p>Your time is: {moment(startDate).format("LL")}</p>
  constructor(props) {
    super(props);

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
    title = this.state.value;
    start = this.state.start;
    end = this.state.end;
    day = this.state.day;
    console.log({day});
    event.preventDefault();
  }

  onTaskSubmit = () => {
    //date = moment(startDate).format("LL");
    //console.log(date);
  }
  render() {
    
    return (
      <form style={{}} onSubmit={this.handleSubmit}>
        
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
                          if (typeof e[0] === 'string') {
                            this.state.start = e[0];
                          } else {
                            this.state.end = e[1];
                          }
                        }
                        
                      }}
                      
                    />  
                </FormControl></th>
              </tr>
            </div>
            <div>
              <th style={{paddingTop: 15}}>
                <input 
                style={{height: 70, width: 300}} 
                className="form-control" id="name"
                placeholder=" Add a Description"
                />
              </th>
            </div>
          </TableCell>
          
        </TableRow>
        <div className="form-group">
          <Button className="form-control btn btn-primary" onSubmit={this.onTaskSubmit} type="submit">
            Submit
          </Button>
        </div>
      </form>
    );

  }
  
};
export default Form;
