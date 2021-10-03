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
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import data from "./mock-data.json";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: 'white',
    height:'550px',
    width: "1800px",
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
  const index = 3;
  const [value, setValue] = useState([new Date(), new Date()]);
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

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      row: addFormData.row,
      day: addFormData.day,
      start: addFormData.start,
      end: addFormData.end,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      row: editFormData.row,
      day: editFormData.day,
      start: editFormData.start,
      end: editFormData.end,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      row: contact.row,
      day: contact.day,
      start: contact.start,
      end: contact.end,
    };
    setEditFormData(formValues);
  };
  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  const handleAddTime = () => {
    const newContact = {
      row: index,
      day: document.getElementById("weekday").value,
      start: "1:00pm",
      end: "3:00pm",
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
   
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
        <TableRow align="center" style={{paddingLeft:140, paddingRight: 0}} className={classes.myGrid}>
          <TableCell style={{paddingRight: 35}}>
            <Grid style={{paddingTop:85}}>
              <Grid>
                <Paper style={{width: 350, height: 510}} className={classes.paper} >
                  <Grid className={classes.elems} align='center'>
                    <Avatar style={{backgroundColor: 'green'}}>

                    </Avatar>
                    <Button>Change Profile Picture</Button>
                    <h1>It Takes a Village</h1>
                    <th class="hello">Hello, Jeff</th>
                    
                    <Paper className={classes.paper}>
                      <Typography align="left">Name: Jeff Smith</Typography>
                      <Typography align="left">Bio: Loves Dogs, Cooking</Typography>
                      <Typography align="left">Rating: 4.96/5</Typography>
                      <Grid>
                        <th><br></br></th>
                      </Grid>
                      <Grid>
                        <th><br></br></th>
                      </Grid>
                      <Button>Change Name</Button>
                      <Button>Change Bio</Button>
                      <Button>Change Contact Information</Button>
                      <Button>Change Username/Password</Button>
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
              <Paper style={{width: 390, height: 540, paddingLeft: 0}} className={classes.times}>
                <center><h3 className={classes.avail}>Your Availability</h3></center>
                <Paper className={classes.mytimes} style={{width: 347, height: 362, right: 10}}>
                  <table style={{borderCollapse: 'separate', borderSpacing: '25px 15px'}}>
                    <thead>
                        <tr> 
                            <th>Row</th>
                            <th>Day</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                        </tr>
                    </thead>
                    <tbody style={{width:350}}>
                    
                      {contacts.map((contact) => (
                        <Fragment>
                          {editContactId === contact.id ? (
                            <EditableRow
                              editFormData={editFormData}
                              handleEditFormChange={handleEditFormChange}
                              handleCancelClick={handleCancelClick}
                            />
                          ) : (
                            <ReadOnlyRow
                              contact={contact}
                              handleEditClick={handleEditClick}
                              handleDeleteClick={handleDeleteClick}
                            />
                          )}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                  <tr></tr>
                </Paper>
                <TableRow>
                  <TableCell>
                    <FormControl style={{ paddingBottom: 10, minWidth: 85, paddingLeft: 14, paddingTop: 5, fontSize: 12 }}>          
                    <FormControl>
                    <InputLabel>Day</InputLabel>
                    <Select
                        native
                        required
                        displayEmpty
                        fullWidth
                        inputProps={{
                        name: 'name',
                        id: 'weekday'
                        }}
                    >
                        <option value={"Sunday"}>Sunday</option>
                        <option value={"Monday"}>Monday</option>
                        <option value={"Tuesday"}>Tuesday</option>
                        <option value={"Wednesday"}>Wednesday</option>
                        <option value={"Thursday"}>Thursday</option>
                        <option value={"Friday"}>Friday</option>
                        <option value={"Saturday"}>Saturday</option>
                    </Select>
                    </FormControl>    
                      <TimeRangePicker 
                        id= "addtime"
                        disableClock= {true}
                        onChange={(newValue)=>setValue(value)}
                        value={value}
                        disableClock={true}
                      />
                    </FormControl>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="secondary" align="center" style={{ maxWidth: '100px', maxHeight: '50px', minWidth: '30px', minHeight: '30px', right: 10 }} 
                      onClick={handleAddTime}
                    >
                    Add Time</Button>
                  </TableCell>
                </TableRow>
              </Paper>
            </Grid>
          </TableCell>
          <TableCell class="account" className={classes.account}>
            <Grid container style={{width: 600, paddingRight: 80, paddingTop: 85}} className={classes.container}>
              <Grid item xs={8} className={classes.grid}>

                  <Paper style={{height: 508}} className={classes.paper}>
             

                    <center><h2>Account Personalization</h2></center>
                    <left><Typography>Choose a Role:</Typography></left>
                    <Button>Parent</Button>
                    <Button>Volunteer</Button>
                    <TableRow>
                      <TableCell>
                        <TableCell align="center" >
                          <FormControl style={{ minWidth: 105 }}>
                            <leftCenter><Typography class="services">Childcare</Typography></leftCenter>
                            <leftCenter><Typography class="services">Looking for Work</Typography></leftCenter>
                            <leftCenter><Typography class="services">Carpooling</Typography></leftCenter>
                            <leftCenter><Typography class="services">Food Providers</Typography></leftCenter>
                          
                          </FormControl>
                        </TableCell>
                        <TableCell align="center">
                          <FormControl style={{ minWidth: 105, paddingBottom: 0, minHeight: 100 }}>
                            <Checkbox style={{paddingBottom: 20}}>Childcare</Checkbox>
                            <Checkbox style={{paddingBottom: 20}}>Childcare</Checkbox>
                            <Checkbox style={{paddingBottom: 20}}>Childcare</Checkbox>
                            <Checkbox style={{paddingBottom: 20}}>Childcare</Checkbox>
                          </FormControl>
                        </TableCell>
                      </TableCell>  
                    </TableRow>
                  </Paper>
              </Grid>         
            </Grid>      
          </TableCell>
          
        </TableRow>
        <VillageNavBar page="account"/>
        
    </div> 
    
    
  );
}

/*
<Grid className={classes.elems} align='center'>
                      <Avatar style={{backgroundColor: 'green'}}>

                      </Avatar>
                      <th class="space">Change Profile Picture</th>
                      <h1>It Takes a Village</h1>
                      <th class="hello">Hello, Jeff</th>
                      
                      <Paper className={classes.paper}>
                          <Typography align="left">Name: Jeff Smith</Typography>
                          <Typography align="left">Bio: Loves Dogs, Cooking</Typography>
                      </Paper>
                  </Grid>
*/

export default AccountPersonalization;
