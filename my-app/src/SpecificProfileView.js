// All necessary imports;
import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import './App.css';
import './SpecificProfileView.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Avatar, Button, Box} from "@material-ui/core";
import LockedOutlinedIcon from '@material-ui/icons/LockOutlined';


class SpecificProfileView extends Component {
render() {
    return (
      <MuiThemeProvider>
            <Paper elevation={5} style={{padding: 50, height: '100vh', width:'90%', margin: "20px auto"}}>
                    <Grid container spacing={24} align='left'>
                        <Grid item xs={6}>
                            <h1>Profile View</h1>
                            <img src="https://pbs.twimg.com/profile_images/1357505418/stickman_prof_pic.png"/>
                            <h1></h1>
                            <RaisedButton label="Request Contact Information" primary={true} variant="contained" style={{margin: '15px 0'}}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper style={{border: "1px solid black", height: '35vh'}}>
                                <ul>
                                    <li>Laurence Williamson</li>
                                    <li>Tutor, Caregiver</li>
                                    <li>Available from 1:30pm to 4:30pm</li>
                                </ul>
                            </Paper>
                            <h1>Bio</h1>
                            <Paper style={{border: "1px solid black", height: '35vh'}}>
                                <p>Bio information about a user</p>
                            </Paper>
                        </Grid>
                    </Grid>

            </Paper>
      </MuiThemeProvider>
    );
  }
}
export default SpecificProfileView;