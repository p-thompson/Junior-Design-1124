import React, { useState } from "react";
import { makeStyles, Paper, Grid } from '@material-ui/core';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import VillageNavBar from './VillageNavBar';
import { useHistory } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker'
import moment from 'moment';
import {$,event,jQuery} from 'jquery';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      background: 'white',
      height:'550px'
    },
  toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    appBar: {
      background: "#0077c0",
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  title: {
      flexgrow: 1
  },
  container: {
      paddingTop: '80px'
  },
    grid: {
      padding: theme.spacing(1),
    },
    fixedHeight: {
      height: 24,
    },
    logout: {
      marginLeft: "auto",
      marginRight: -12
    },
    paper: {
      padding: theme.spacing(30),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      backgroundColor: '#E8E8E8'
    },
    table: {
      minWidth: 200,
      maxWidth: 200,
      marginTop: 150,
      paddingRight: 100,
      marginLeft: 500,
    },
}));



function SearchScreen() {
  const classes = useStyles();
  const history = useHistory();
  const goToProfileView = () => {
    if (user2Info.get("manSearch") !== []) {
      history.push('/profiles', user2Info);
    } else {
      history.push('/profiles', history.location.state);
    }
  }
  const goToLogin = () => history.push('/');
  const [startDate, setDate] = useState(new Date());
  const [value, setValue] = useState([new Date(), new Date()]);
  const [user2Info, setUser2Info] = useState(new Map([["user", history.location.state.get("user")], ["connections", history.location.state.get("connections")], ["task", history.location.state.get("task")], ["requests", history.location.state.get("requests")], ['search', history.location.state.get('search')], ["selectedUser", history.location.state.get("selectedUser")], ["manSearch", []], ["searchType", ""]]));

  const [tempInfo, setInfo] = useState(new Map([["id", ""],["service", ""], ["timeBegin", ""], ["timeEnd", ""], ["day", ""], ["time1", ""], ["time2", ""]]));

  function manSearch() {
    var options = {weekday: 'long'};
    const tempTask = {
      "username": "void",
      "day": new Intl.DateTimeFormat('en-US', options).format(tempInfo.get("day")),
      "timeBegin": tempInfo.get("timeBegin").substring(0, tempInfo.get("timeBegin").length - 3) + ":00 " + tempInfo.get("timeBegin").substring(tempInfo.get("timeBegin").length - 2, tempInfo.get("timeBegin").length),
      "timeEnd": tempInfo.get("timeEnd").substring(0, tempInfo.get("timeEnd").length - 3) + ":00 " + tempInfo.get("timeEnd").substring(tempInfo.get("timeEnd").length - 2, tempInfo.get("timeEnd").length),
      "service": tempInfo.get("service"),
    }

    history.location.state.set("searchType", "manual");
    setUser2Info((user2Info.set("searchType", "manual")));
    // const tempTask = {
    //   "username": "void",
    //   "day": "Friday",
    //   "timeBegin": "11:30:00 AM",
    //   "timeEnd": "03:00:00 PM",
    //   "service": "BABYSIT"
    // }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(tempTask)
    };
    fetch("http://localhost:8080/backend/rest/account/task", requestOptions)
      .then(res => res.json())
      .then((data) => {
          //this.err.msg = "hi";
          fetch("http://localhost:8080/backend/rest/account/search/")
            .then(res2 => res2.json())
            .then((data2) => {
              setUser2Info(new Map(user2Info.set("manSearch", data2)))
              goToProfileView();
          })
            .catch(err => {
              throw new Error(err)
          })
      })
      .catch(err => {
          //console.log(err);
          throw new Error(err);
      })
  }
  function autoSearch() {
    history.location.state.set("searchType", "automatic");
    setUser2Info((user2Info.set("searchType", "automatic")));
    goToProfileView();
  }


  return (
    <div>
      <MuiThemeProvider>
      <AppBar position="absolute" color='primary' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title} className={classes.title}>It Takes a Village</Typography>
          <section className={classes.logout}>
            <Button
              color='inherit'
              onClick={goToLogin}
            >
              logout
            </Button>
          </section>
        </Toolbar>
      </AppBar>
      <Grid>
            <Paper elevation={5} style={{padding: 30, height: '600px', width:350, margin: "100px auto", backgroundColor: '#E1EBEE'}}>
                  <center><h2>Help Needed</h2></center>
                  <FormControl style={{ minWidth: 80 }} align="center" fullWidth>
                    <InputLabel id="demo-simple-select-label">Position</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="service"
                      autoWidth
                      onChange={(e) => setInfo(new Map(tempInfo.set("service",e.target.value)))}
                    >
                      <MenuItem value={"TUTOR"}>Tutoring</MenuItem>
                      <MenuItem value={"BABYSIT"}>Babysitting</MenuItem>
                      <MenuItem value={"TRANSPORTATION"}>Transportation</MenuItem>
                    </Select>
                  </FormControl>
                  <TableCell></TableCell>
                  <center><h2>Time Range</h2></center>
                  <center><TimeRangePicker
                    disableClock= {true}
                    value={value}
                    onChange={(e) => {
                      if (e != null) {
                        var newtime  = "";
                        var newtime1 = "";
                        if (typeof e[0] === 'string') {
                          newtime = e[0];    
                         
                          setInfo(new Map(tempInfo.set("time1", e[0])));
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
                          setInfo(new Map(tempInfo.set("time1", newtime)));
                          // this.state.start = newtime;
                          // this.state.time1 = newtime;
                          //var zero = "0";
                          //newtime = zero.concat(newtime);
                          setInfo(new Map(tempInfo.set("timeBegin", newtime)));
                         
                        } 
          
                        if ( (typeof e[1] === 'string')) {
                          newtime = e[1];   
             
                          setInfo(new Map(tempInfo.set("time2", e[1])));
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
                          setInfo(new Map(tempInfo.set("time2", newtime)));
                          // this.state.start = newtime;
                          // this.state.time1 = newtime;
                          var zero = "0";
                          newtime = zero.concat(newtime);
                          setInfo(new Map(tempInfo.set("timeEnd", newtime)));
                          
                        }

                      }
                      
                    }}
                  /></center>
                  <TableCell></TableCell>
                  <center><h2>Date</h2></center>
                  <center><DatePicker 
                  name="day"
                  value={startDate} 
                  onChange={(date) => {
                    setDate(date)
                    setInfo(new Map(tempInfo.set("day",date)))
                    }
                  } 
                 /></center>
                  <TableCell></TableCell>
                  {/* // TODO change these buttons to be different based on profile type (different names and functionality) */}
                  <RaisedButton label="Enter" align="center" variant="contained" backgroundColor='#0077c0' labelColor="white"  fullWidth style={{margin: '15px 0'}} onClick={manSearch}>
                  </RaisedButton>
                    <RaisedButton label="Automatic Match" align="center" variant="contained" backgroundColor='#0077c0' labelColor="white" fullWidth style={{margin: '15px 0'}} onClick={autoSearch}>
                    </RaisedButton>
            </Paper>
        </Grid>
        </MuiThemeProvider>
        <VillageNavBar page="search"/>
    </div>
  )}
export default SearchScreen;
