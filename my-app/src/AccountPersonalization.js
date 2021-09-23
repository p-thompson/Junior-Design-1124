import React, { useState } from "react";
import './AccountPersonalization.css';
import { Typography } from '@material-ui/core';
import VillageNavBar from './VillageNavBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Select, Avatar, Button, FormControl, InputLabel} from "@material-ui/core";
import './CreateAccount.css';
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
      background: '#6EC77A',
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
      paddingLeft: "30px"
  },
    grid: {
      padding: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    logout: {
      marginLeft: "auto",
      marginRight: -12
    },
    account: {
      paddingLeft: "180px",
      
    },
    pageelems: {
      
    },
}));

function AccountPersonalization() {
  const classes = useStyles();
  const history = useHistory();
  const goToLogin = () => history.push('/');

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
        <TableRow className={classes.pageelems}>
          <TableCell class="account" className={classes.account}>
            <Grid container style={{width: 600}} className={classes.container}>
              <Grid item xs={8} className={classes.grid}>
                  <Paper className={classes.paper}>
                    <center><h2>Account Personalization</h2></center>
                    <left><Typography>Choose a Role:</Typography></left>
                    <Button>Parent</Button>
                    <Button>Volunteer</Button>
                    <left><Typography>Choose Available Times:</Typography></left>
                    <TableRow>
                      <TableCell align="center" >
                        <FormControl style={{ minWidth: 105 }}>
                          <InputLabel id="demo-simple-select-label">Begin Time</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            autoWidth
                          >
                            <MenuItem value={10}>12:00</MenuItem>
                            <MenuItem value={20}>1:00</MenuItem>
                            <MenuItem value={30}>2:00</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell align="center">
                        <FormControl style={{ minWidth: 105 }}>
                          <InputLabel id="demo-simple-select-label">End Time</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            autoWidth
                          >
                            <MenuItem value={10}>1:00</MenuItem>
                            <MenuItem value={20}>2:00</MenuItem>
                            <MenuItem value={30}>3:00</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                    </TableRow>
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
                          <FormControl style={{ minWidth: 105 }}>
                            <Checkbox>Childcare</Checkbox>
                            <Checkbox>Childcare</Checkbox>
                            <Checkbox>Childcare</Checkbox>
                            <Checkbox>Childcare</Checkbox>
                          </FormControl>
                        </TableCell>
                      </TableCell>  
                    </TableRow>
                  </Paper>
              </Grid>         
            </Grid>      
          </TableCell>
          <TableCell class="profile">
            <Grid container style={{width: 600}} className={classes.container}>
              <Grid item xs={8} className={classes.grid}>
                <Paper className={classes.paper}>
                  <Grid className={classes.elems} align='center'>
                    <Avatar style={{backgroundColor: 'green'}}>

                    </Avatar>
                    <th class="space">Change Profile Picture</th>
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
        </TableRow>
        <VillageNavBar></VillageNavBar>
        
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
