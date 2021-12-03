import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import './AccountPersonalization.css';
import { Typography } from '@material-ui/core';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VillageNavBar from './VillageNavBar';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Select, Avatar, Button, FormControl, InputLabel} from "@material-ui/core";
import './Login.css';
import { useHistory} from "react-router-dom";
import {Helmet} from 'react-helmet'
import { positions } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from "@material-ui/core/Box";
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LockedOutlinedIcon from '@material-ui/icons/LockOutlined';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import MenuItem from '@material-ui/core/MenuItem';
import { Checkbox } from '@material-ui/core';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker'
import data from "./mock-data.json";
import Tasks from "./Tasks"
import TaskItems from "./TaskItems";
import { Container } from './Container';
import { myDate } from "./Form";
import LoadTasks from "./LoadTasks";
import RaisedButton from 'material-ui/RaisedButton';
import anna from './photos/anna_smith.jpeg';
import bob from './photos/bob_wilson.jpeg';
import jane from './photos/jane_doe.jpg';
import joe from './photos/joe_brown.jpg';
import sally from './photos/sally_jones.jpg';
import mike from './photos/mike_johnson.jpg';
import stick from './photos/stickman_prof_pic.png';
import Modal from 'react-modal';
import {Alert} from '@mui/material';

export var myid = 0;
export var myusername = "";
export var history;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: 'white',
    height:'550px',
    width: "900px",
  },
toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  appBar: {
    position:"fixed",
    background: '#0077c0',
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
  
    paddingTop: '80px',
    paddingLeft: "0px"
},
  grid: {
    padding: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    backgroundColor: "#E1EBEE"
  },
  fixedHeight: {
    height: 240,
  },
  logout: {
    marginLeft: "auto",
    marginRight: -12,
  },
  account: {
  },
  times: {
    
    
  },
  profile: {
    paddingRight: 0,

  },
  myGrid: {
    
  },
  avail: {
    paddingTop: "10px",
  },
  mytimes: {
    marginLeft: "25px",

  },
  myavail: {
    paddingTop: "60px",
  },

}));
function AccountPersonalization() {
  const classes = useStyles();
  const history = useHistory();
  const id = history.location.state.get("user").id;
  const whichPhoto = () => {
    if (id == 1) {
      return jane;
    } else if (id == 2) {
      return joe;
    } else if (id == 3) {
      return anna;
    } else if (id == 4) {
      return bob;
    } else if (id == 5) {
       return sally
    } else if (id == 6) {
      return mike
    } else {
      return stick;
    }
  }
  const goToLogin = () => history.push('/');
  myusername = history.location.state.get("user").username;
  myid = history.location.state.get("user").id;
  const fname = history.location.state.get("user").firstName;
  const lname = history.location.state.get("user").lastName;
 
  const rating = "5.0";
  const bio = history.location.state.get("user").bio;

  const goToUpdateAccount = () => history.push('/updateaccount', history.location.state);
  const [notes, setNotes] = useState([]);
  const index = 3;
  const [timeRange, setTimeRange] = useState(new Map([["timeBegin", ""], ["timeEnd", ""]]));
  const [show, setShow] = useState(false);
  const [formInfo, setFormInfo] = useState(new Map([["service", ""], ["day", ""], ["timeBegin", ""], ["timeEnd", ""]]));
  const defaultForm = new Map([["service", ""], ["day", ""], ["timeBegin", ""], ["timeEnd", ""]]);
  const[err,setErr] = useState(new Map([["msg", ""], ["sev", ""], ["vis", false]]));
  const [errorValue, setErrorValue] = useState("");
  var obj = {
    table: []
  };



  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '470px',
      height: '415px',
      background:  "#E1EBEE",
    },
    background:  "#E1EBEE",
 
  };


 
 
  const showForm = () => setShow(true);
  const closeModal = () => setShow(false);
    
  const onFinalSubmit = (event) => {
    event.preventDefault();
    if (formInfo.get("service") == "Choose" || !formInfo.get("service")) {
      console.log("fix title");
      setErrorValue("Please choose a Title");
      
    } else if (formInfo.get("day") == "Choose" || !formInfo.get("day") ) {
      console.log("fix day");
      setErrorValue("Please choose a Day");
    }
    else if (formInfo.get("timeBegin") == "" || formInfo.get("timeEnd")  == "") {
      console.log("fix start");
      setErrorValue("Please choose a Time");

    }
    else {
      const myTask = {
        
        "day": formInfo.get("day").substring(0, formInfo.get("day").length - 1).toUpperCase(),
        "timeBegin": formInfo.get("timeBegin").substring(0, formInfo.get("timeBegin").length - 3) + ":00 " + formInfo.get("timeBegin").substring(formInfo.get("timeBegin").length - 2, formInfo.get("timeBegin").length),
        "timeEnd": formInfo.get("timeEnd").substring(0, formInfo.get("timeEnd").length - 3) + ":00 " + formInfo.get("timeEnd").substring(formInfo.get("timeEnd").length - 2, formInfo.get("timeEnd").length),
        "service": formInfo.get("service").toUpperCase(),
      };
      console.log(formInfo.get("timeBegin"));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(myTask)
      };
      fetch("http://localhost:8080/backend/rest/account/task", requestOptions)
        .then(res => res.json())
        .then((data) => {
            //this.err.msg = "hi";
        })
        .catch(err => {
            console.log(err);
            //throw new Error(err);
        })
        //history.location.state.set(new Map(history.location.state.set("task", )))
        //history.location.state.set([..."tasks", myTask]);
        closeModal();
        setErrorValue("");
        const tasks = history.location.state.get("task");
        tasks.push(myTask);
        history.location.state.set(new Map(history.location.state.set("task", tasks)));
    }

  };

  return (
    <div className={classes.root}>
    <AppBar position="fixed" color='primary' className={classes.appBar}>
        <Toolbar position="absolute" className={classes.toolbar}>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}className={classes.title}>It Takes a Village</Typography>
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
        <Helmet>
          <title>ItTakesAVillage</title>
        </Helmet>
        <TableRow align="center" style={{paddingLeft:245, paddingRight: 0}} className={classes.myGrid}>
          <TableCell style={{paddingRight: 35}}>
            <Grid style={{paddingTop:85}}>
              <Grid>
                <Paper style={{width: 350, height: 510}} className={classes.paper} >
                  <Grid className={classes.elems} align='center'>
                  <h1>{fname}'s Profile</h1>
                    <Avatar alt="User Profile Image" img src={whichPhoto()} style={{ width: 100, height: 100 }} >

                    </Avatar>
                    <h1></h1>
                    <Paper className={classes.paper}>
                    <Typography align="left" ><strong>Name: </strong> {fname} {lname}</Typography>
                      <Typography align="left"><strong>Bio: </strong> {bio}</Typography>
                      <Grid>
                        <th><br></br></th>
                      </Grid>
                      <Grid>
                        <th><br></br></th>
                      </Grid>
                      <MuiThemeProvider>
                      <RaisedButton label="Edit Account" backgroundColor='#0077c0' labelColor='white' variant="contained" fullWidth style={{margin: '15px 0'}} onClick={goToUpdateAccount}/>
                      </MuiThemeProvider>
                      <Grid>
                        <th><br></br></th>
                      </Grid>
                      <Grid>
                        <th><br></br></th>
                      </Grid>
                    </Paper>
                  </Grid>
                </Paper>         
              </Grid>
            </Grid>
          </TableCell>
          <TableCell align="center" className={classes.myavail} style={{paddingLeft: 0, paddingTop: 85}}>
            <Grid style={{paddingRight: 0, paddingLeft: 0}}>

              <Paper style={{width: 590, height: 510, paddingLeft: 0, backgroundColor: '#E1EBEE'}} className={classes.times}>
                <center><h3 className={classes.avail}>Weekly Tasks</h3></center>
                
                <Paper className={classes.mytimes} style={{width: 530, height: 412, right: 10, backgroundColor: '#E1EBEE'}}>
                 
                  <div id="taskcontainer">
                    <MuiThemeProvider>
                      <RaisedButton  onClick={showForm} backgroundColor='#0077c0' labelColor='white' variant="contained" style={{width: 400, margin: '15px 0'}} className="form-control btn btn-primary">
                        Add Task
                      </RaisedButton>
                    </MuiThemeProvider>
                    <Modal  style={customStyles} isOpen={show}>
                      <form >
                      <th>
                      <center><h2 style={{paddingBottom: 20, paddingLeft: 75}}>Create New Task</h2></center>
                      </th>
                      <th><right><Button style={{width: 5, height: 5,position: 'absolute',
                            right: 0,
                            top: 15}} onClick={closeModal}>X</Button></right></th>
                      {errorValue && <Alert severity="error">{errorValue}</Alert>}
                      <TableRow style={{width: 100, paddingRight: 0}}>
                        <TableCell style={{paddingLeft: 20}}>
                          <div  className="form-group">
                            <tr>
                              <label style={{paddingLeft: 43}}htmlFor="name">Title: </label>
                              <th style={{paddingLeft: 16}}>
                                <select onChange={event => setFormInfo(new Map(formInfo.set("service", event.target.value)))} style={{width: 208, background:  "#E1EBEE"}} >   
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
                                  <select onChange={event => setFormInfo(new Map(formInfo.set("day", event.target.value)))} style={{width: 208, background:  "#E1EBEE"}} 
                                  
                                  > 
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
                                          setFormInfo(new Map(formInfo.set("timeBegin",newtime)));
                                          //this.state.time1 = newtime;
                                          var zero = "0";
                                          setFormInfo(new Map(formInfo.set("timeBegin",zero.concat(newtime))));
                                          //formInfo.get("timeBegin") = zero.concat(formInfo.get("timeBegin"));
                                        
                                        } 
                          
                                        if ( (typeof e[1] === 'string')) {
                                          newtime = e[1];   
                                          const hour = parseInt(newtime + "");
                                          if (hour < 12) {
                                            newtime += " AM";
                                        
                                          } else {
                                            newtime += " PM";
                                          }
                                     
                                          if (hour < 1 && hour >= 0) {
                                            newtime = "12" + newtime.substring(2, newtime.length);
                                      
                                          } else if (hour > 12) {
                                            const newhour = (parseInt(newtime.substring(0,2))) - 12;
                                            newtime = (newhour + "") + newtime.substring(2, newtime.length);
                                            
                                          }
                                          setFormInfo(new Map(formInfo.set("timeEnd",newtime)));
                                          //this.state.time2 = newtime;
                                          var zero = "0";
                                          setFormInfo(new Map(formInfo.set("timeEnd",zero.concat(newtime))));
                                          //formInfo.get("timeEnd") = zero.concat(formInfo.get("timeEnd"));
                                          
                                          
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
                          <RaisedButton  onClick={onFinalSubmit} backgroundColor='#0077c0' labelColor='white' variant="contained" fullWidth style={{margin: '15px 0'}} className="form-control btn btn-primary">
                            Submit
                          </RaisedButton>
                          
                        </MuiThemeProvider>

                      </div>
                      
                    </form>
                    </Modal>

                  </div>
                  <div>
                    <LoadTasks></LoadTasks>
                  </div>
                  <tr></tr>
                </Paper>
              </Paper>
            </Grid>
          </TableCell>
         

            
        </TableRow>
        <VillageNavBar page="account"/>
        
    </div> 
    
    
  );
}



export default AccountPersonalization;