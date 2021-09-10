// All necessary imports;
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Avatar, Button} from "@material-ui/core";
import LockedOutlinedIcon from '@material-ui/icons/LockOutlined';
import './Login.css';
import { useHistory,  BrowserRouter as Router, Route } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import CreateAccount from "./CreateAccount";
import {Helmet} from 'react-helmet'

function Login() {
    const history = useHistory();
    const goToCreateAccount = () => history.push('/createaccount');
    const goToForgotPassword = () => history.push('/forgotpassword');
    const goToDashboard = () => history.push('/dashboard');

    return (
        <div className="Login">
        <Helmet>
        <title>ItTakesAVillage</title>
        </Helmet>
        <MuiThemeProvider>
        <Grid>
            <Paper elevation={5} style={{padding: 50, height: '400px', width:280, margin: "100px auto"}}>
                <Grid align='center'>
                    <Avatar style={{backgroundColor: 'green'}}>
                        <LockedOutlinedIcon>

                        </LockedOutlinedIcon>
                    </Avatar>
                    <h1>It Takes a Village</h1>
                </Grid>
                <TextField label='Username' hintText='Enter Username' required fullWidth/>
                <TextField label='Password' hintText='Enter Password' required fullWidth/>
                <RaisedButton label="Login" primary={true} variant="contained" fullWidth style={{margin: '15px 0'}} onClick={goToDashboard}/>
                <RaisedButton label="Create Account" primary={true} onClick={goToCreateAccount} variant="contained" fullWidth style={{margin: '15px 0'}}/>
                <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" 
                style={{justifyContent:'center'}}
                fullWidth
                onClick={goToForgotPassword}
                color="primary">Forgot Password ?</Button>
            </Paper>
        </Grid>
        </MuiThemeProvider>
        </div>
    );

}
export default Login;