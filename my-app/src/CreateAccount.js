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
    const [tempInfo, setUserInfo] = useState(new Map([["username", ""], ["firstName", ""], ["lastName", ""], ["password", ""], ["conf_password", ""], ["cell", ""], ["email", ""], ["city", ""], ["street", ""], ["state", ""], ["zip", ""], ["type", ""]]));
    const [userInfo, setUser2Info] = useState(new Map([["user", ""], ["connections", ""], ["requests", ""]]));
    const goToLogin = () => history.goBack();

    const [errorValue, setErrorValue] = useState("")

    function ValidateCredentials() {
        if (tempInfo.get("username").length === 0) {
            setErrorValue("Invalid Username.")
        } else if (tempInfo.get("password").length === 0) {
            setErrorValue("Invalid Password.")
        } else if (tempInfo.get("password") != tempInfo.get("conf_password")) {
            setErrorValue("Password and confirm password do not match.")
        } else if (tempInfo.get("firstName").length === 0) {
            setErrorValue("No first name has been entered.")
        } else if (tempInfo.get("lastName").length === 0) {
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
        }
    }

    function createUser() {
        // ValidateCredentials()
        const defaultValues = {
            "id": 10,
            "username": "pleasework",
            "password": "mypassword",
            "firstName": "Jane",
            "lastName": "Doe",
            "zipcode": 30308,
            "state": "GA",
            "city": "Atlanta",
            "street": "15 Tech Lane",
            "cell": "404-444-4444",
            "email": "janedoe@gatech.edu",
            "bio": "My name is Jane. I have two children aged 8 and 9. I am looking for a tutor in math for both of them",
            "userType": "VOLUNTEER"
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(defaultValues)
        };
        fetch("http://localhost:8080/backend/rest/account/create", requestOptions)
            .then(res => res.json())
            .then((data) => {
                setErrorValue("Hi!")
            })
            .catch(err => {
                throw new Error(err);
            })
        
        setErrorValue("Got here!");
    }
    return (
        <div className="CreateAccount">
        {errorValue && <Alert severity="error">{errorValue}</Alert>}
        <Helmet>
        <title>ItTakesAVillage</title>
        </Helmet>
        <MuiThemeProvider>
        <Grid>
            <Paper elevation={5} style={{padding: 50, height: '500px', width:350, margin: "100px auto", overflow: "auto", backgroundColor: '#E1EBEE'}}>
                <Grid align='center'>
                <h1>Create Account</h1>
                </Grid>
                <TextField label='Username' hintText='Username' onChange={(e) => setUserInfo(new Map(tempInfo.set("username",e.target.value)))} required fullWidth/>
                <TextField label='Password' hintText='Password' onChange={(e) => setUserInfo(new Map(tempInfo.set("password",e.target.value)))} required fullWidth/>
                <TextField label='Password' hintText='Confirm Password' onChange={(e) => setUserInfo(new Map(tempInfo.set("conf_password",e.target.value)))} required fullWidth/>
                <TextField label='First Name' hintText='First Name' onChange={(e) => setUserInfo(new Map(tempInfo.set("fname",e.target.value)))} required fullWidth/>
                <TextField label='Last Name' hintText='Last Name' onChange={(e) => setUserInfo(new Map(tempInfo.set("lname",e.target.value)))} required fullWidth/>
                <TextField label='Email' hintText='Email' onChange={(e) => setUserInfo(new Map(tempInfo.set("email",e.target.value)))} required fullWidth/>
                <TextField label='Cell' hintText='Cell Number' onChange={(e) => setUserInfo(new Map(tempInfo.set("cell",e.target.value)))} required fullWidth/>
                <TextField label='Street' hintText='Street' onChange={(e) => setUserInfo(new Map(tempInfo.set("street",e.target.value)))} required fullWidth/>
                <TextField label='City' hintText='City' onChange={(e) => setUserInfo(new Map(tempInfo.set("city",e.target.value)))} required fullWidth/>
                <TextField label='State' hintText='State' onChange={(e) => setUserInfo(new Map(tempInfo.set("state",e.target.value)))} required fullWidth/>
                <TextField label='Zip' hintText='Zip' onChange={(e) => setUserInfo(new Map(tempInfo.set("zip",e.target.value)))} required fullWidth/>
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
                    <option value={"Volunteer"}>Volunteer</option>
                    <option value={"Parent"}>Parent</option>
                </Select>
                </FormControl>
                <RaisedButton label="Create Account" labelColor="white" backgroundColor='#0077c0' variant="contained" fullWidth style={{margin: '20px 0'}} onClick={createUser}/>
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