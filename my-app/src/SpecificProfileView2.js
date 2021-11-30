// All necessary imports;
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Grid, Paper, Avatar, Button, Box} from "@material-ui/core";
import VillageNavBar from './VillageNavBar';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Login.css';
import anna from './photos/anna_smith.jpeg';
import bob from './photos/bob_wilson.jpeg';
import jane from './photos/jane_doe.jpg';
import joe from './photos/joe_brown.jpg';
import stick from './photos/stickman_prof_pic.png';

function SpecificProfileView() {
    const whichPhoto = () => {
        if (selectedUser2.id == 1) {
          return jane;
        } else if (selectedUser2.id == 2) {
          return joe;
        } else if (selectedUser2.id == 3) {
          return anna;
        } else if (selectedUser2.id == 4) {
          return bob;
        } else {
          return stick;
        }
      }

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
    let selectedUser2 = history.location.state.get("selectedUser");
    const returnToProfiles = () => history.goBack();
    const classes = useStyles();
    return (
        <div className={classes.root} style={{overflow: 'hidden'}}>
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
                        <h1>{selectedUser2.firstName} {selectedUser2.lastName}</h1>
                        {<Avatar alt="User Profile Image" img src={whichPhoto()} style={{height: 350, width: 350, marginLeft: 75, marginTop: 25}}/>}
                        <h1></h1>
                    </Grid>
                    <Grid item xs={6}>
                        <h1>Bio</h1>
                        <Paper elevation = {5} style={{backgroundColor: '#E1EBEE', overflow: 'auto', height: 'auto', marginTop: 10, padding: 8}}>
                            <li>{selectedUser2.firstName} {selectedUser2.lastName}</li>
                            <li>Tutor, Caregiver</li>
                            <li>Available from 1:30pm to 4:30pm</li>
                            <p>{selectedUser2.bio}</p>
                        </Paper>
                        <h1>Contact Information</h1>
                        <Paper elevation = {5} style={{backgroundColor: '#E1EBEE', overflow: 'auto', height: 'auto', marginTop: 10, padding: 8}}>
                            <p>Cellphone Number: {selectedUser2.cell}</p>
                            <p>Email: {selectedUser2.email}</p>
                        </Paper>

                    </Grid>
                    <Grid item>
                        <VillageNavBar page="home"/>
                    </Grid>
                </Grid>
            </Paper>
        </MuiThemeProvider>
        </div>
    );
}
export default SpecificProfileView;
