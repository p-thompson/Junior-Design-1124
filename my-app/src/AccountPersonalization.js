import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import './AccountPersonalization.css';
import { Typography } from '@material-ui/core';
import VillageNavBar from './VillageNavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
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
  const goToLogin = () => history.push('/');

  const fname = history.location.state.get("user").firstName;
  const lname = history.location.state.get("user").lastName;
  const rating = "5.0";
  const bio = history.location.state.get("user").bio;
  const goToCreateTask = () => history.push('/createtask');
  const goToUpdateAccount = () => history.push('/updateaccount', history.location.state);

<<<<<<< HEAD

=======
>>>>>>> 5ff288e (adding ability to modify profile)

  const index = 3;
  const [timeRange, setTimeRange] = useState(new Map([["start", ""], ["end", ""]]));
  var obj = {
    table: []
  };
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    Row: "",
    Day: "",
    start: "",
    end: "",
  });
  const [editFormData, setEditFormData] = useState({
    row: "",
    day: "",
    start: "",
    end: "",
  });
  const [editContactId, setEditContactId] = useState(null);

 
  const handleAddTime = () => {


    if (timeRange.get('start').length != 0 && timeRange.get('end').length != 0) {
      const newContact = {
        row: index,
        day: document.getElementById("weekday").value,
        start: timeRange.get("start"),
        end: timeRange.get("end"),
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    }
  };
  const triggerText = 'Open form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(myDate);
    
    /*
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.mydate.value);
    */

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
                    <Avatar style={{backgroundColor: '#0077c0'}}>

                    </Avatar>
                    <Button>Change Profile Picture</Button>
                    <h1>It Takes a Village</h1>
                    
                    <Paper className={classes.paper}>
                    <Typography align="left">Name: {fname} {lname}</Typography>
                      <Typography align="left">Bio: {bio}</Typography>
                      <Grid>
                        <th><br></br></th>
                      </Grid>
                      <Grid>
                        <th><br></br></th>
                      </Grid>
                      <Button onClick={goToUpdateAccount}>Edit Account</Button>
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
                <center><h3 className={classes.avail}>Open Tasks</h3></center>
                
                <Paper className={classes.mytimes} style={{width: 530, height: 412, right: 10, backgroundColor: '#E1EBEE'}}>
                 
                  <div id="taskcontainer">
                    <Tasks/>

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