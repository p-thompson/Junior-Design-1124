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
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
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
  const goToProfileView = () => history.push('/profiles');
  const goToLogin = () => history.push('/');
  const [startDate, onChange] = useState(new Date());
  const [value, setValue] = useState([new Date(), new Date()]);


  return (
    <div className={classes.root}>
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
        <TableRow className={classes.pageelems}>
          <TableCell class="account" className={classes.account}>
            <Grid container style={{width: 900}} className={classes.container}>
              <Grid item xs={8} className={classes.grid}>
                <Paper className={classes.paper} style={{marginLeft: 175}}>
                  <center><h2>Search</h2></center>
                  <left>Select Who You Need</left>
                  <FormControl style={{ minWidth: 80 }} align="center">
                    <InputLabel id="demo-simple-select-label">Position</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      autoWidth
                    >
                      <MenuItem value={10}>Volunteer</MenuItem>
                      <MenuItem value={20}>Parent</MenuItem>
                    </Select>
                  </FormControl>
                  <TableCell></TableCell>
                  <left>Select Time Range</left>
                  <TimeRangePicker
                    disableClock= {true}
                    onChange={(newValue) => setValue(value)}
                    value={value}
                  />
                  <TableCell></TableCell>
                  <left> Select Date</left>
                 <DatePicker 
                  value={startDate} 
                  onChange={onChange} 
                 />
                  <TableCell></TableCell>
                 <TableRow style={{ height: 150 }} align="center">
                  <TableCell align="center">
                    <Button onClick={goToProfileView}>
                     Enter
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button align="center" style={{ maxWidth: '100px', maxHeight: '50px', minWidth: '30px', minHeight: '30px' }} onClick={goToProfileView}>
                     Automatic Matches
                    </Button>
                 </TableCell>
                </TableRow>
                </Paper>
              </Grid>
            </Grid>
          </TableCell>
        </TableRow>
      <VillageNavBar></VillageNavBar>
    </div>
  )}

export default SearchScreen;
