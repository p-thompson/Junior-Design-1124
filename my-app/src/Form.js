import React, { useState }  from 'react';
import Button from "@material-ui/core/Button";
import DatePicker from 'react-date-picker';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker'
import {FormControl} from "@material-ui/core";

export const Form = ({ onSubmit }) => {
  const [value, onChange] = useState(new Date());
  const [timeRange, setTimeRange] = useState(new Map([["start", ""], ["end", ""]]));
  return (
    <form onSubmit={onSubmit}>
      <center><h2 style={{}}>Create New Task</h2></center>
      <div className="form-group">
        <label htmlFor="name">Title  </label>
        <input className="form-control" id="name" />
      </div>
      <div style={{paddingTop: 10}} className="datepick">
        <tr>
          <label >Choose Date   </label>
          <th style={{paddingLeft: 10}}>
            <DatePicker
              onChange={onChange}
              value={value}
            />
          </th>
        </tr>
      </div>
      <div style={{paddingTop: 10}} className="timepick">
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
        </FormControl>
      </div>
  
      <div className="form-group">
        <Button className="form-control btn btn-primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};
export default Form;
