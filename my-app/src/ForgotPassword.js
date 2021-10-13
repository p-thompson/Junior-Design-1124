// All necessary imports;
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Button} from "@material-ui/core";
import { useHistory} from "react-router-dom";
import './Login.css';

function ForgotPassword() {
    const history = useHistory();
    const goToLogin = () => history.goBack();

    return (
        <MuiThemeProvider>
        <Grid>
            <Paper elevation={5} style={{padding: 50, height: '400px', width:280, margin: "100px auto", backgroundColor: '#E1EBEE'}}>
                <h1 align="center">Forgot Your Password?</h1>
                <h4 align="center">Enter your email address to be sent instructions for resetting your password.</h4>
                <TextField label='Email Address' hintText='Email Address' required fullWidth/>
                <RaisedButton label="Continue" labelColor="white" backgroundColor='#0077c0' variant="contained" fullWidth style={{margin: '15px 0'}}/>
                <Button 
                disableFocusRipple disableRipple style={{ textTransform: "none" }} 
                fullWidth
                variant="text"
                onClick={goToLogin}
                color="primary">Back to Login</Button>
            </Paper>
        </Grid>
        </MuiThemeProvider>
    );
}
export default ForgotPassword;