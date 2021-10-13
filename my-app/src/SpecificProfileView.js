// All necessary imports;
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid, Paper, Avatar, Button, Box} from "@material-ui/core";
import VillageNavBar from './VillageNavBar';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Login.css';


function SpecificProfileView() {


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            background: '#FFFFFF',
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
            height: 240,
          },
          profiles: {
            marginLeft: "auto",
            marginRight: -12
          },
    }));

    const history = useHistory();
    const returnToProfiles = () => history.push('/profiles');
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="absolute" color='primary' className={classes.appBar}>
                <Toolbar clasName={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}className={classes.title}>It Takes a Village</Typography>
                    <section className={classes.profiles}>
                        <Button 
                            color='inherit'
                            onClick={returnToProfiles}
                        >
                            Back
                        </Button>
                    </section>
                </Toolbar>
            </AppBar>

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
                    <Grid item>
                        <VillageNavBar page="search"/>
                    </Grid>
                </Grid>
            </Paper>
        </MuiThemeProvider>
        </div>
    );
}
export default SpecificProfileView;