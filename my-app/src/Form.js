import React, { useState,Component  }  from 'react';
import DatePicker from "react-datepicker";
import TimeRangePicker from '@wojtekmaj/react-timerange-picker'
import {FormControl} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';
import RaisedButton from 'material-ui/RaisedButton';
import alert from 'alert'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export var title = "";
export var start = "";
export var end= "";
export var myDate = "";
export var day= new Date();



export class Form extends Component {
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
      alert('Task Added');
    }

  }

  render() {
    
    return (
      <form style={{paddingLeft: 20}} onSubmit={this.handleSubmit}>
        
        <center><h2 style={{paddingBottom: 20, paddingRight: 10}}>Create New Task</h2></center>
        <TableRow style={{width: 100, paddingRight: 0}}>
          <TableCell style={{paddingLeft: 20}}>
            <div  className="form-group">
              <tr>
                <label style={{paddingLeft: 43}}htmlFor="name">Title: </label>
                <th style={{paddingLeft: 16}}>
                  <select style={{width: 170}} value={this.state.value} onChange={this.handleChange}> 
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
              <tr >
                <label style={{paddingLeft: 40}} >Date:   </label>
                <th style={{paddingLeft: 15, width: 220}}>
                  <FormControl>
                    <DatePicker 
                      style={{width:220}}
                      selected={ this.state.day }
                      dateFormat="MM/dd/yyyy"
                      onChange={(e) => this.addDate(e)}
                    />
                  </FormControl>
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
