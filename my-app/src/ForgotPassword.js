// All necessary imports;
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Avatar, Button} from "@material-ui/core";
import './App.css';

class ForgotPassword extends Component {
// Fields necessary for creating account
constructor(props){
  super(props);
  this.state={
  email:''
  }
 }

render() {
    return (
        <MuiThemeProvider>
        <Grid>
            <Paper elevation={5} style={{padding: 50, height: '50vh', width:280, margin: "100px auto"}}>
                <h1>Forgot Your Password?</h1>
                <h4>Enter your email address to be sent instructions for resetting your password.</h4>
                <TextField label='Email Address' hintText='Email Address' required fullWidth/>
                <RaisedButton label="Continue" primary={true} variant="contained" fullWidth style={{margin: '15px 0'}}/>
                <Button 
                disableFocusRipple disableRipple style={{ textTransform: "none" }} 
                variant="text"
                color="primary">Back to Login</Button>
            </Paper>
        </Grid>
        </MuiThemeProvider>
    );
  }
}
export default ForgotPassword;