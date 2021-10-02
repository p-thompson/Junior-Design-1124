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
    const goToLogin = () => history.goBack();
    const goToDashboard = () => history.push('/dashboard');

    const [usernameValue, setUsernameValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [confirmPassValue, setConfirmPassValue] = useState("")
    const [firstNameValue, setFirstNameValue] = useState("")
    const [lastNameValue, setLastNameValue] = useState("")
    const [emailValue, setEmailValue] = useState("")
    const [cellValue, setCellValue] = useState("")
    const [streetValue, setStreetValue] = useState("")
    const [cityValue, setCityValue] = useState("")
    const [stateValue, setStateValue] = useState("")
    const [zipValue, setZipValue] = useState("")

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
            <Paper elevation={5} style={{padding: 50, height: '500px', width:300, margin: "100px auto", overflow: "auto"}}>
                <Grid align='center'>
                <h1>Create Account</h1>
                </Grid>
                <TextField onChange={(e) => setUsernameValue(e.target.value)} label='Username' hintText='Enter Username' required fullWidth/>
                <TextField onChange={(e) => setPasswordValue(e.target.value)} label='Password' hintText='Enter Password' required fullWidth/>
                <TextField onChange={(e) => setConfirmPassValue(e.target.value)} label='Password' hintText='Confirm Password' required fullWidth/>
                <TextField onChange={(e) => setFirstNameValue(e.target.value)} label='First Name' hintText='First Name' required fullWidth/>
                <TextField onChange={(e) => setLastNameValue(e.target.value)} label='Last Name' hintText='Last Name' required fullWidth/>
                <TextField onChange={(e) => setEmailValue(e.target.value)} label='Email' hintText='Email' required fullWidth/>
                <TextField onChange={(e) => setCellValue(e.target.value)} label='Cell' hintText='Cell Number' required fullWidth/>
                <TextField onChange={(e) => setStreetValue(e.target.value)} label='Street' hintText='Street' required fullWidth/>
                <TextField onChange={(e) => setCityValue(e.target.value)} label='City' hintText='City' required fullWidth/>
                <TextField onChange={(e) => setStateValue(e.target.value)} label='State' hintText='State' required fullWidth/>
                <TextField onChange={(e) => setZipValue(e.target.value)} label='Zip' hintText='Zip' required fullWidth/>
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
                <RaisedButton label="Create Account" primary={true} variant="contained" fullWidth style={{margin: '20px 0'}} onClick={ValidateCredentials}/>
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