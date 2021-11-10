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

function UpdateAccount() {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState(new Map([["username", ""], ["fname", ""], ["lname", ""], ["password", ""], ["conf_password", ""], ["cell", ""], ["email", ""], ["city", ""], ["street", ""], ["state", ""], ["zip", ""], ["bio", ""]]));
    const goToDashboard = () => {
        setUserInfo(new Map(userInfo.set("rating","5/5")));
        setUserInfo(new Map(userInfo.set("bio","Add a Bio!")));
        history.push('/dashboard', userInfo);
    }

    // set this map to values from the backend to populate the screen with current data
    const defaultValues = new Map(
        [
            ["username", "username"],
            ["fname", "fname"],
            ["lname", "lname"],
            ["password", "password"],
            ["conf_password", "conf_password"],
            ["cell", "cell"],
            ["email", "email"],
            ["city", "city"],
            ["street", "street"],
            ["state","state"],
            ["zip","zip"],
            ["bio","bio"]
        ]
    );


    const goToAccountPersonalization = () => {
        history.push('/accountpersonalization');
    }

    const [errorValue, setErrorValue] = useState("")

    function ValidateCredentials() {
        if (userInfo.get("username").length === 0) {
            setErrorValue("Invalid Username.")
        } else if (userInfo.get("password").length === 0) {
            setErrorValue("Invalid Password.")
        } else if (userInfo.get("password") != userInfo.get("conf_password")) {
            setErrorValue("Password and confirm password do not match.")
        } else if (userInfo.get("fname").length === 0) {
            setErrorValue("No first name has been entered.")
        } else if (userInfo.get("lname").length === 0) {
            setErrorValue("No last name has been entered.")
        } else if (userInfo.get("email").length === 0) {
            setErrorValue("Invalid email.")
        } else if (userInfo.get("cell").length === 0) {
            setErrorValue("Invalid cell number.")
        } else if (userInfo.get("street").length === 0) {
            setErrorValue("Invalid street.")
        } else if (userInfo.get("city").length === 0) {
            setErrorValue("Invalid city.")
        } else if (userInfo.get("state").length === 0) {
            setErrorValue("Invalid state.")
        } else if (userInfo.get("zip").length === 0) {
            setErrorValue("Invalid zip code.")
        } else if (userInfo.get("bio").length === 0) {
            setErrorValue("Invalid Bio.")
        } else {
            goToDashboard()
        }
    }
    function applyUpdates() {
        // apply account updates here
        goToAccountPersonalization();
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
                <h1>Edit Account</h1>
                </Grid>
                {/* here we can use the defaultValue prop to set a default value for the textFields */}
                <TextField defaultValue = {defaultValues.get("username")} label='Username' hintText='Username' onChange={(e) => setUserInfo(new Map(userInfo.set("username",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {defaultValues.get("password")} label='Password' hintText='Password' onChange={(e) => setUserInfo(new Map(userInfo.set("password",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {defaultValues.get("conf_password")} label='Password' hintText='Confirm Password' onChange={(e) => setUserInfo(new Map(userInfo.set("conf_password",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {defaultValues.get("fname")} label='First Name' hintText='First Name' onChange={(e) => setUserInfo(new Map(userInfo.set("fname",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {defaultValues.get("lname")} label='Last Name' hintText='Last Name' onChange={(e) => setUserInfo(new Map(userInfo.set("lname",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {defaultValues.get("email")} label='Email' hintText='Email' onChange={(e) => setUserInfo(new Map(userInfo.set("email",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {defaultValues.get("cell")} label='Cell' hintText='Cell Number' onChange={(e) => setUserInfo(new Map(userInfo.set("cell",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {defaultValues.get("street")} label='Street' hintText='Street' onChange={(e) => setUserInfo(new Map(userInfo.set("street",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {defaultValues.get("city")} label='City' hintText='City' onChange={(e) => setUserInfo(new Map(userInfo.set("city",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {defaultValues.get("state")} label='State' hintText='State' onChange={(e) => setUserInfo(new Map(userInfo.set("state",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {defaultValues.get("zip")} label='Zip' hintText='Zip' onChange={(e) => setUserInfo(new Map(userInfo.set("zip",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {defaultValues.get("bio")} label='Bio' hintText='Bio' onChange={(e) => setUserInfo(new Map(userInfo.set("bio",e.target.value)))} required fullWidth/>
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
                <RaisedButton label="Update Account" labelColor="white" backgroundColor='#0077c0' variant="contained" fullWidth style={{margin: '20px 0'}} onClick={applyUpdates}/>
                <Button 
                disableFocusRipple disableRipple style={{ textTransform: "none" }} 
                variant="text"
                fullWidth
                onClick={goToAccountPersonalization}
                color="primary">Back to Account</Button>
                <Button
                disableFocusRipple disableRipple style={{ textTransform: "none"}}
                variant="text"
                fullWidth
                color="primary">Delete Account</Button>

            </Paper>
        </Grid>
        </MuiThemeProvider>
        </div>
    );
}
export default UpdateAccount;
