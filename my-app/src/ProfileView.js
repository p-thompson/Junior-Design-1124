// All necessary imports;
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid, Paper, Avatar, Button, Box} from "@material-ui/core";
import VillageNavBar from './VillageNavBar';
import { useHistory } from "react-router-dom";

function CreateListing(props) {
    const history = useHistory();
    const goToSpecificView = () => {
        history.location.state.set("selectedUser", props.user);
        history.push('/profileselection2', history.location.state);
    }

    return(
        <Grid container spacing={24} align='left'>
            <Grid item xs={4}>
                <img src="https://pbs.twimg.com/profile_images/1357505418/stickman_prof_pic.png" width="150" height="150"/>
            </Grid>
            <Grid item xs={4}>
                <Paper style={{border: "1px solid black"}}>
                    <h4>{props.user.firstName} {props.user.lastName}</h4>
                    <h4>{props.user.userType}</h4>
                    <h4>Available from 3pm to 6pm</h4>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <RaisedButton label="View Profile" labelColor="white" backgroundColor='#0077c0' variant="contained" align="center" width="30vh" style={{margin: '15% 25%'}} onClick={goToSpecificView}/>
            </Grid>
            <Grid item>
                <VillageNavBar page="search"/>
            </Grid>
        </Grid> 
    )
}

function ProfileView() {

    const history = useHistory();

    console.log(history.location.state.get("search"));
    const searchResults = history.location.state.get("search");
    
    let itemList=[];

    searchResults.forEach((item, index) => {
        itemList.push(<CreateListing user={item}/>);
    })
    return (
      <MuiThemeProvider>
            <Paper elevation={5} style={{padding: 50, height: '100vh', width:'90%', margin: "20px auto"}}>
                <h1 align="left">Profile List</h1>
                {itemList}
            </Paper>
      </MuiThemeProvider>
    );
}
export default ProfileView;