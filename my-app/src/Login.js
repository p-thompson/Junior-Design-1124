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
//import useForceUpdate from 'use-force-update';

const useStyles = makeStyles((theme) => ({
}));


function Login() {
    const [userInfo, setUserInfo] = useState(new Map([["user", ""], ["task", []], ["connections", "empty"], ["requests", "empty"], ["search", []], 
        ["selectedUser", ""], ['servAndAvail', ''], ["manSearch", []], ["searchType", ""]]));
    //useForceUpdate();
    const history = useHistory();
    const goToCreateAccount = () => history.push('/createaccount');
    const goToForgotPassword = () => history.push('/forgotpassword');
    const goToDashboard = () => history.push('/dashboard', userInfo);

    const classes = useStyles();

    const [usernameValue, setUsernameValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [errorValue, setErrorValue] = useState("")
    const [tempID, setID] = useState(0)

    function ValidateCredentials() {
        if (usernameValue.length === 0) {
            setErrorValue("Please input a username!")
        } else if (passwordValue.length === 0) {
            setErrorValue("Please input a password!")
        } else {
            fetch("http://localhost:8080/backend/rest/account/search/" + usernameValue)
                    .then(res => res.json())
                    .then((data) => {
                        setUserInfo(new Map(userInfo.set("search", data)))
                    })
                    .catch(err => {
                        throw new Error(err)
                    })
            fetch("http://localhost:8080/backend/rest/account/" + usernameValue)
            .then(res => res.json())
            .then((data) => {
                setUserInfo(new Map(userInfo.set("user",data)))

                if (data == null) {
                    setErrorValue("That username does not exist!")
                    return;
                }
                fetch("http://localhost:8080/backend/rest/account/connections/" + data.id)
                .then(res => res.json())
                .then((data) => {
                    setUserInfo(new Map(userInfo.set("connections",data)))
                })
                .catch(err => {
                    throw new Error(err)
                })
                fetch("http://localhost:8080/backend/rest/account/task/" + usernameValue)
                .then(res => res.json())
                .then((data) => {
                    setUserInfo(new Map(userInfo.set("task",data)))
                })
                .catch(err => {
                    throw new Error(err)
                })

                fetch("http://localhost:8080/backend/rest/account/requests/" + data.id)
                .then(res => res.json())
                .then((data) => {
                    setUserInfo(new Map(userInfo.set("requests",data)))
                })
                .catch(err => {
                    throw new Error(err)
                })
            })
            .catch(err => {
                throw new Error(err)
            })

            // useForceUpdate();
            if (userInfo.get("user") == null) {
                setErrorValue("That username does not exist!")
            } else if (userInfo.get("user") != "" && userInfo.get("connections") != "empty") {
                if (passwordValue != userInfo.get("user").password) {
                    setErrorValue("The password input is incorrect!")
                } else if (userInfo.get("requests") != "empty") {
                    goToDashboard()
                }
            }
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
            <Paper elevation={5} style={{padding: 50, height: '550px', width:350, margin: "100px auto", backgroundColor: '#E1EBEE'}}>
                <Grid align='center'>
                    <Avatar style={{backgroundColor: '#0077c0'}}>
                        <LockedOutlinedIcon>

                        </LockedOutlinedIcon>
                    </Avatar>
                    <h1>It Takes a Village</h1>
                </Grid>
                <TextField id='Username' value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} label='Username' hintText='Enter Username' required fullWidth/>
                <TextField id='Password' type="password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} label='Password' hintText='Enter Password' required fullWidth/>
                <RaisedButton label="Login" backgroundColor='#0077c0' labelColor='white' variant="contained" fullWidth style={{margin: '15px 0'}} onClick={ValidateCredentials}/>
                <RaisedButton label="Create Account" backgroundColor='#0077c0' labelColor='white' onClick={goToCreateAccount} variant="contained" fullWidth style={{margin: '15px 0', color: '#00538C'}}/>
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