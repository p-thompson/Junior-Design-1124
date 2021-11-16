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
    const [user2Info, setUser2Info] = useState(new Map([["user", ""], ["connections", ""], ["requests", ""]]));

    // set this map to values from the backend to populate the screen with current data
    const username = history.location.state.get("user").username;
    const initialValues = new Map(
        [   
            ["id", history.location.state.get("user").id],
            ["username", history.location.state.get("user").username],
            ["fname", history.location.state.get("user").firstName],
            ["lname", history.location.state.get("user").lastName],
            ["cell", history.location.state.get("user").cell],
            ["email", history.location.state.get("user").email],
            ["city", history.location.state.get("user").city],
            ["street", history.location.state.get("user").street],
            ["state",history.location.state.get("user").state],
            ["zip", history.location.state.get("user").zipcode],
            ["bio",history.location.state.get("user").bio],
            ["userType",history.location.state.get("user").userType]
        ]
    );

    function handleDeleteAccount() {
        console.log("testing delete account confirmation");
    }
    const [tempInfo, setInfo] = useState(new Map([["username", initialValues.get("username")], ["fname", initialValues.get("fname")], ["lname", initialValues.get("lname")], ["password", ""], ["conf_password", ""], ["cell", initialValues.get("cell")], ["email", initialValues.get("email")], ["city", initialValues.get("city")], ["street", initialValues.get("street")], ["state", initialValues.get("state")], ["zip", initialValues.get("zip")], ["bio", initialValues.get("bio")]]));


    const goToAccountPersonalization = () => {
        if (successValue != "") {
            history.push('/accountpersonalization', user2Info);
        } else {
            history.push('/accountpersonalization', history.location.state);
        }
    }

    const [errorValue, setErrorValue] = useState("")
    const [successValue, setSuccessValue] = useState("")

    function ValidateCredentials() {
        var changed = true;
        if (tempInfo.get("username").length === 0) {
            setErrorValue("Invalid Username.")
        } else if (tempInfo.get("fname").length === 0) {
            setErrorValue("No first name has been entered.")
        } else if (tempInfo.get("lname").length === 0) {
            setErrorValue("No last name has been entered.")
        } else if (tempInfo.get("email").length === 0) {
            setErrorValue("Invalid email.")
        } else if (tempInfo.get("cell").length === 0) {
            setErrorValue("Invalid cell number.")
        } else if (tempInfo.get("street").length === 0) {
            setErrorValue("Invalid street.")
        } else if (tempInfo.get("city").length === 0) {
            setErrorValue("Invalid city.")
        } else if (tempInfo.get("state").length === 0) {
            setErrorValue("Invalid state.")
        } else if (tempInfo.get("zip").length === 0) {
            setErrorValue("Invalid zip code.")
        } else if (tempInfo.get("bio").length === 0) {
            setErrorValue("Invalid Bio.")
        } else {
            changed = false;
            setErrorValue("");
        }
        return changed;
    }
    function applyUpdates() {
        // apply account updates here
        var changed = ValidateCredentials();
        const id =  history.location.state.get("user").id
        const type =  history.location.state.get("user").userType
        const defaultValues = {
            "id":  id,
            "username": tempInfo.get("username"),
            "password": "",
            "firstName": tempInfo.get("fname"),
            "lastName": tempInfo.get("lname"),
            "zipcode": tempInfo.get("zip"),
            "state": tempInfo.get("state"),
            "city": tempInfo.get("city"),
            "street": tempInfo.get("street"),
            "cell": tempInfo.get("cell"),
            "email": tempInfo.get("email"),
            "bio": tempInfo.get("bio"),
            "userType": type
        };
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(defaultValues)
        };
        if (!changed) {
            fetch("http://localhost:8080/backend/rest/account/modify/" + initialValues.get("username"), requestOptions)
            .then(res => res.json())
            .then((data) => {
                setUser2Info(new Map(user2Info.set("user", data)))
            })
            .catch(err => {
                throw new Error(err)
            })
            setSuccessValue("Account Information Changed!")
        }
    }
    return (
        <div className="CreateAccount">
        {errorValue && <Alert severity="error">{errorValue}</Alert>}
        {successValue && <Alert severity="success">{successValue}</Alert>}
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
                <TextField defaultValue = {initialValues.get("username")} label='Username' hintText='Username' onChange={(e) => setInfo(new Map(tempInfo.set("username",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {initialValues.get("fname")} label='First Name' hintText='First Name' onChange={(e) => setInfo(new Map(tempInfo.set("fname",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {initialValues.get("lname")} label='Last Name' hintText='Last Name' onChange={(e) => setInfo(new Map(tempInfo.set("lname",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {initialValues.get("email")} label='Email' hintText='Email' onChange={(e) => setInfo(new Map(tempInfo.set("email",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {initialValues.get("cell")} label='Cell' hintText='Cell Number' onChange={(e) => setInfo(new Map(tempInfo.set("cell",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {initialValues.get("street")} label='Street' hintText='Street' onChange={(e) => setInfo(new Map(tempInfo.set("street",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {initialValues.get("city")} label='City' hintText='City' onChange={(e) => setInfo(new Map(tempInfo.set("city",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {initialValues.get("state")} label='State' hintText='State' onChange={(e) => setInfo(new Map(tempInfo.set("state",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {initialValues.get("zip")} label='Zip' hintText='Zip' onChange={(e) => setInfo(new Map(tempInfo.set("zip",e.target.value)))} required fullWidth/>
                <TextField defaultValue = {initialValues.get("bio")} rows={4} multiLine={true} label='Bio' hintText='Bio' onChange={(e) => setInfo(new Map(tempInfo.set("bio",e.target.value)))} required fullWidth/>
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
                color="primary"
                onClick={() => {
                    const confirmWindow = window.confirm(
                        "Do you really want to delete your account? This action cannot be undone."
                    )
                    if (confirmWindow === true) {
                        handleDeleteAccount();
                    }
                }}>Delete Account</Button>

            </Paper>
        </Grid>
        </MuiThemeProvider>
        </div>
    );
}
export default UpdateAccount;
