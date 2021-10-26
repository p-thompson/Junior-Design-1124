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
import {$,jQuery} from 'jquery';
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
  const goToProfileView = () => history.push('/profiles', history.location.state);
  const goToLogin = () => history.push('/');
  const [startDate, onChange] = useState(new Date());
  const [value, setValue] = useState([new Date(), new Date()]);


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
                  <center><h2>What Help is Needed?</h2></center>
                  <FormControl style={{ minWidth: 80 }} align="center" fullWidth>
                    <InputLabel id="demo-simple-select-label">Position</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      autoWidth
                    >
                      <MenuItem value={10}>Tutoring</MenuItem>
                      <MenuItem value={20}>Babysitting</MenuItem>
                      <MenuItem value={30}>Transportation</MenuItem>
                    </Select>
                  </FormControl>
                  <TableCell></TableCell>
                  <center><h2>Select Time Range</h2></center>
                  <center><TimeRangePicker
                    disableClock= {true}
                    onChange={(newValue) => setValue(value)}
                    value={value}
                  /></center>
                  <TableCell></TableCell>
                  <center><h2>Select Date</h2></center>
                  <center><DatePicker 
                  value={startDate} 
                  onChange={onChange} 
                 /></center>
                  <TableCell></TableCell>
                  <RaisedButton label="Enter" align="center" variant="contained" backgroundColor='#0077c0' labelColor="white"  fullWidth style={{margin: '15px 0'}} onClick={goToProfileView}>
                  </RaisedButton>
                    <RaisedButton label="Automatic Match" align="center" variant="contained" backgroundColor='#0077c0' labelColor="white" fullWidth style={{margin: '15px 0'}} onClick={goToProfileView}>
                    </RaisedButton>
            </Paper>
        </Grid>
        </MuiThemeProvider>
        <VillageNavBar page="search"/>
    </div>
  )}
export default SearchScreen;
