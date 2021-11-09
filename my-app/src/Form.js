import React, { useState }  from 'react';
import Button from "@material-ui/core/Button";
import DatePicker from "react-datepicker";
import TimeRangePicker from '@wojtekmaj/react-timerange-picker'
import {FormControl} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Checkbox } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
export const Form = ({ onSubmit }) => {
  //              <p>Your time is: {moment(startDate).format("LL")}</p>
  const [startDate, setStartDate] = useState(new Date());
  const [timeRange, setTimeRange] = useState(new Map([["start", ""], ["end", ""]]));
  return (
    <form style={{}} onSubmit={onSubmit}>
      
      <center><h2 style={{}}>Create New Task</h2></center>
      <TableRow style={{width: 100, paddingRight: 50}}>
        <TableCell style={{}}>
          <div  className="form-group">
            <tr>
              <label htmlFor="name">Title: </label>
              <th style={{paddingLeft: 10}}>
                <input className="form-control" id="name" />
              </th>
            </tr>
          </div>
          <div style={{paddingTop: 10}} className="datepick">
            <tr>
              <label >Date:   </label>
              <th style={{paddingLeft: 10}}>
                <FormControl>
                  <DatePicker 
                    selected={startDate} 
                    onChange={date => setStartDate(date)} 
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
                          timeRange.set("start", e[0]);
                        } else {
                          timeRange.set("end", e[1]);
                        }
                      }
                    }}
                  />
              </FormControl></th>

            </tr>
          </div>
        </TableCell>
        <TableCell style={{paddingLeft: 60}}>
          <TableRow>
            <TableCell>
              <FormControl style={{ minWidth: 110}}>
                <leftCenter><Typography class="services">Childcare</Typography></leftCenter>
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
        <Button className="form-control btn btn-primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
export default Form;
