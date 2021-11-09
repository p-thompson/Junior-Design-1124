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

import date from "./AccountPersonalization";
import moment from "moment";
export var title = "";
export var start = "";
export var end= "";
export var myDate = "";


export class Form extends Component {
  //              <p>Your time is: {moment(startDate).format("LL")}</p>
  constructor(props) {
    super(props);

    this.state = {
      start: "",
      day: "",
      title: "",
      start: "",
      end: "",
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(event) {
    this.setState({title: event.target.value});
  }
  handleSubmit(event) {
    title = this.state.title;
    start = this.state.start;
    end = this.state.end;
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
                  <input value={this.state.title} onChange={this.handleChange} style={{width: 245}} className="form-control" id="name" />
                </th>
              </tr>
            </div>
            <div style={{paddingTop: 10}} className="datepick">
              <tr>
                <label >Date:   </label>
                <th style={{paddingLeft: 10}}>
                  <FormControl>
                 
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
          <TableCell style={{paddingLeft: 60}}>
            <TableRow>
              <TableCell>
                <FormControl style={{ minWidth: 110}}>
                  <leftCenter style={{paddingBottom: 13}}><Typography class="services">Childcare</Typography></leftCenter>
                  <leftCenter><Typography class="services">Looking for Work</Typography></leftCenter>
                  <leftCenter><Typography class="services">Carpooling</Typography></leftCenter>
                  <leftCenter><Typography class="services">Food Providers</Typography></leftCenter>
                
                </FormControl>
              </TableCell>
              <TableCell>
                <FormControl style={{ minWidth: 105, paddingBottom: 0, minHeight: 100 }}>
                  <Checkbox style={{paddingBottom: 20, color:"#0077c0"}}>Childcare</Checkbox>
                  <Checkbox style={{paddingBottom: 20, color:"#0077c0"}}>Childcare</Checkbox>
                  <Checkbox style={{paddingBottom: 20, color:"#0077c0"}}>Childcare</Checkbox>
                  <Checkbox style={{paddingBottom: 20, color:"#0077c0"}}>Childcare</Checkbox>
                </FormControl>
              </TableCell>
            </TableRow>
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
