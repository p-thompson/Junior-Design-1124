// All necessary imports;
import React, {useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Avatar, Button} from "@material-ui/core";
import {Alert} from '@mui/material';
import LockedOutlinedIcon from '@material-ui/icons/LockOutlined';
import './CreateAccount.css';
import { useHistory,  BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import ForgotPassword from "./ForgotPassword";
import CreateAccount from "./CreateAccount";
import {Helmet} from 'react-helmet';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
}));

function Login() {

    const history = useHistory();
    const goToCreateAccount = () => history.push('/createaccount');
    const goToForgotPassword = () => history.push('/forgotpassword');
    const goToDashboard = () => history.push('/dashboard');
    const classes = useStyles();

    const [usernameValue, setUsernameValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [errorValue, setErrorValue] = useState("")

    function ValidateCredentials() {
        if (usernameValue.length === 0) {
            setErrorValue("Invalid Username.")
        } else if (passwordValue.length === 0) {
            setErrorValue("Invalid Password.")
        } else if (usernameValue != passwordValue) {
            setErrorValue("Username and Password do not match")
        } else {
            goToDashboard()
        }
    }

    return (
        <div className="Login">
        {errorValue && <Alert severity="error">{errorValue}</Alert>}
        <Helmet>
        <title>ItTakesAVillage</title>
        </Helmet>
        <MuiThemeProvider>
        <Grid>
            <Paper elevation={5} style={{padding: 50, height: '400px', width:280, margin: "100px auto", backgroundColor: '#E0E0E0'}}>
                <Grid align='center'>
                    <Avatar style={{backgroundColor: 'green'}}>
                        <LockedOutlinedIcon>

                        </LockedOutlinedIcon>
                    </Avatar>
                    <h1>It Takes a Village</h1>
                </Grid>
                <TextField id='Username' value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} label='Username' hintText='Enter Username' required fullWidth/>
                <TextField id='Password' type="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} label='Password' hintText='Enter Password' required fullWidth/>
                <RaisedButton label="Login" primary={true} variant="contained" fullWidth style={{margin: '15px 0'}} onClick={ValidateCredentials}/>
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


