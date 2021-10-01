// All necessary imports;
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid, Paper, Avatar, Button, Box} from "@material-ui/core";
import VillageNavBar from './VillageNavBar';
import { useHistory } from "react-router-dom";



function CreateListing() {
    const history = useHistory();
    const goToSpecificView = () => history.push('/profileselection');

    return(
        <Grid container spacing={24} align='left'>
            <Grid item xs={4}>
                <img src="https://pbs.twimg.com/profile_images/1357505418/stickman_prof_pic.png" width="150" height="150"/>
            </Grid>
            <Grid item xs={4}>
                <Paper style={{border: "1px solid black"}}>
                    <h4>Ani Warden</h4>
                    <h4>Caregiver</h4>
                    <h4>Available from 3pm to 6pm</h4>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <RaisedButton label="Request Contact Information" primary={true} variant="contained" align="center" width="30vh" style={{margin: '15% 25%'}} onClick={goToSpecificView}/>
            </Grid>
            <Grid item>
                <VillageNavBar page="search"/>
            </Grid>
        </Grid> 
    )
}

function ProfileView() {
    return (
      <MuiThemeProvider>
            <Paper elevation={5} style={{padding: 50, height: '100vh', width:'90%', margin: "20px auto"}}>
                <h1 align="left">Profile List</h1>
                <CreateListing />
                <CreateListing />
                <CreateListing />
            </Paper>
      </MuiThemeProvider>
    );
}
export default ProfileView;