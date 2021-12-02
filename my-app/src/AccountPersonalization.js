import React, { useState, Fragment } from "react";
import './AccountPersonalization.css';
import { Typography } from '@material-ui/core';
import Box from '@mui/material/Box'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VillageNavBar from './VillageNavBar';
import {Grid, Paper, Select, Avatar, Button, FormControl, InputLabel} from "@material-ui/core";
import './Login.css';
import { useHistory} from "react-router-dom";
import {Helmet} from 'react-helmet'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import data from "./mock-data.json";
import Tasks from "./Tasks"
import { myDate } from "./Form";
import RaisedButton from 'material-ui/RaisedButton';
import anna from './photos/anna_smith.jpeg';
import bob from './photos/bob_wilson.jpeg';
import jane from './photos/jane_doe.jpg';
import joe from './photos/joe_brown.jpg';
import sally from './photos/sally_jones.jpg';
import mike from './photos/mike_johnson.jpg';
import stick from './photos/stickman_prof_pic.png';




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

  const fname = history.location.state.get("user").firstName;
  const lname = history.location.state.get("user").lastName;
  const rating = "5.0";
  const bio = history.location.state.get("user").bio;
  const goToCreateTask = () => history.push('/createtask');
  const goToUpdateAccount = () => history.push('/updateaccount', history.location.state);



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
                <center><h3 className={classes.avail}>WEEKLY TASKS</h3></center>
                
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