// All necessary imports;
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Grid, Paper, Avatar, Button, Box} from "@material-ui/core";
import VillageNavBar from './VillageNavBar';
import { useHistory } from "react-router-dom";
import anna from './photos/anna_smith.jpeg';
import bob from './photos/bob_wilson.jpeg';
import jane from './photos/jane_doe.jpg';
import joe from './photos/joe_brown.jpg';
import stick from './photos/stickman_prof_pic.png';


function CreateListing(props) {


    const whichPhoto = () => {
        if (props.user.id == 1) {
          return jane;
        } else if (props.user.id == 2) {
          return joe;
        } else if (props.user.id == 3) {
          return anna;
        } else if (props.user.id == 4) {
          return bob;
        } else {
          return stick;
        }
      }
    const history = useHistory();
    const goToSpecificView = () => {
        history.location.state.set("selectedUser", props.user);
        
        history.push('/profileselectionsearch', history.location.state);
    }
    
    return(
        <Grid container spacing={24} align='left'>
            <Grid item xs={4}>
                {<Avatar alt="User Profile Image" img src={whichPhoto()} style={{height: 100, width: 100, marginLeft: 75, marginTop: 35}}/>}
            </Grid>
            <Grid item xs={4}>
                <Paper style={{border: "1px solid black", marginTop: 50, marginBottom:50}}>
                    <h4>{props.user.firstName} {props.user.lastName}</h4>
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