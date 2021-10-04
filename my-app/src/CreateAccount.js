// All necessary imports;
import React, {useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Select, Button, FormControl, InputLabel} from "@material-ui/core";
import './CreateAccount.css';
import { useHistory} from "react-router-dom";
import {Alert} from '@mui/material';
import {Helmet} from 'react-helmet'

function CreateAccount() {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState(new Map());
    const goToLogin = () => history.goBack();
    const goToDashboard = () => {
        setUserInfo(new Map(userInfo.set("rating","5/5")));
        setUserInfo(new Map(userInfo.set("bio","Add a Bio!")));
        history.push('/dashboard', userInfo);
    }

    const [errorValue, setErrorValue] = useState("")

    function ValidateCredentials() {
        if (usernameValue.length === 0) {
            setErrorValue("Invalid Username.")
        } else if (passwordValue.length === 0) {
            setErrorValue("Invalid Password.")
        } else if (confirmPassValue != passwordValue) {
            setErrorValue("Password and confirm password do not match.")
        } else if (firstNameValue.length === 0) {
            setErrorValue("No first name has been entered.")
        } else if (lastNameValue.length === 0) {
            setErrorValue("No last name has been entered.")
        } else if (emailValue.length === 0) {
            setErrorValue("Invalid email.")
        } else if (cellValue.length === 0) {
            setErrorValue("Invalid cell number.")
        } else if (streetValue.length === 0) {
            setErrorValue("Invalid street.")
        } else if (cityValue.length === 0) {
            setErrorValue("Invalid city.")
        } else if (stateValue.length === 0) {
            setErrorValue("Invalid state.")
        } else if (zipValue.length === 0) {
            setErrorValue("Invalid zip code.")
        } else {
            goToDashboard()
        }
    }

    return (
        <div className="CreateAccount">
        {errorValue && <Alert severity="error">{errorValue}</Alert>}
        <Helmet>
        <title>ItTakesAVillage</title>
        </Helmet>
        <MuiThemeProvider>
        <Grid>
            <Paper elevation={5} style={{padding: 50, height: '500px', width:300, margin: "100px auto", overflow: "auto", backgroundColor: '#E1EBEE'}}>
                <Grid align='center'>
                <h1>Create Account</h1>
                </Grid>
                <TextField label='Username' hintText='Username' onChange={(e) => setUserInfo(new Map(userInfo.set("username",e.target.value)))} required fullWidth/>
                <TextField label='Password' hintText='Password' onChange={(e) => setUserInfo(new Map(userInfo.set("password",e.target.value)))} required fullWidth/>
                <TextField label='Password' hintText='Confirm Password' required fullWidth/>
                <TextField label='First Name' hintText='First Name' onChange={(e) => setUserInfo(new Map(userInfo.set("fname",e.target.value)))} required fullWidth/>
                <TextField label='Last Name' hintText='Last Name' onChange={(e) => setUserInfo(new Map(userInfo.set("lname",e.target.value)))} required fullWidth/>
                <TextField label='Email' hintText='Email' onChange={(e) => setUserInfo(new Map(userInfo.set("email",e.target.value)))} required fullWidth/>
                <TextField label='Cell' hintText='Cell Number' onChange={(e) => setUserInfo(new Map(userInfo.set("cell",e.target.value)))} required fullWidth/>
                <TextField label='Street' hintText='Street' onChange={(e) => setUserInfo(new Map(userInfo.set("street",e.target.value)))} required fullWidth/>
                <TextField label='City' hintText='City' onChange={(e) => setUserInfo(new Map(userInfo.set("city",e.target.value)))} required fullWidth/>
                <TextField label='State' hintText='State' onChange={(e) => setUserInfo(new Map(userInfo.set("state",e.target.value)))} required fullWidth/>
                <TextField label='Zip' hintText='Zip' onChange={(e) => setUserInfo(new Map(userInfo.set("zip",e.target.value)))} required fullWidth/>
                <FormControl>
                <InputLabel>Type</InputLabel>
                <Select
                    native
                    required
                    displayEmpty
                    fullWidth
                    inputProps={{
                    name: 'name',
                    id: 'name'
                    }}
                >
                    <option value={"volunteer"}>Volunteer</option>
                    <option value={"parent"}>Parent</option>
                    <option value={"admin"}>Admin</option>
                </Select>
                </FormControl>
                <RaisedButton label="Create Account" labelColor="white" backgroundColor='#0077c0' variant="contained" fullWidth style={{margin: '20px 0'}} onClick={ValidateCredentials}/>
                <Button 
                disableFocusRipple disableRipple style={{ textTransform: "none" }} 
                variant="text"
                fullWidth
                onClick={goToLogin}
                color="primary">Back to Login</Button>
            </Paper>
        </Grid>
        </MuiThemeProvider>
        </div>
    );
}
export default CreateAccount;