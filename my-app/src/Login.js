// All necessary imports;
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Avatar, Button} from "@material-ui/core";
import LockedOutlinedIcon from '@material-ui/icons/LockOutlined';
import './App.css';
import ForgotPassword from "./ForgotPassword";
import CreateAccount from "./CreateAccount";

class Login extends Component {
// Username and password fields
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

render() {
    return (
        <MuiThemeProvider>
        <Grid>
            <Paper elevation={5} style={{padding: 50, height: '50vh', width:280, margin: "100px auto"}}>
                <Grid align='center'>
                    <Avatar style={{backgroundColor: 'green'}}>
                        <LockedOutlinedIcon>

                        </LockedOutlinedIcon>
                    </Avatar>
                    <h1>It Takes a Village</h1>
                </Grid>
                <TextField label='Username' hintText='Enter Username' required fullWidth/>
                <TextField label='Password' hintText='Enter Password' required fullWidth/>
                <RaisedButton label="Login" primary={true} variant="contained" fullWidth style={{margin: '15px 0'}}/>
                <RaisedButton label="Create Account" primary={true} variant="contained" fullWidth style={{margin: '15px 0'}}/>
                <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" 
                style={{justifyContent:'center'}}
                fullWidth
                color="primary">Forgot Password ?</Button>
            </Paper>
        </Grid>
        </MuiThemeProvider>
    );
  }
}
export default Login;