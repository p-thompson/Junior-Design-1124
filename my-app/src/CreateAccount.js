// All necessary imports;
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Select, Button, FormControl, InputLabel} from "@material-ui/core";
import './CreateAccount.css';
import { useHistory} from "react-router-dom";
import {Helmet} from 'react-helmet'

function CreateAccount() {
    const history = useHistory();
    const goToLogin = () => history.goBack();

    return (
        <div className="CreateAccount">
        <Helmet>
        <title>ItTakesAVillage</title>
        </Helmet>
        <MuiThemeProvider>
        <Grid>
            <Paper elevation={5} style={{padding: 50, height: '70vh', width:280, margin: "100px auto"}}>
                <Grid align='center'>
                <h1>Create Account</h1>
                </Grid>
                <TextField label='Username' hintText='Enter Username' required fullWidth/>
                <TextField label='Password' hintText='Enter Password' required fullWidth/>
                <TextField label='Password' hintText='Confirm Password' required fullWidth/>
                <TextField label='Full Name' hintText='Full Name' required fullWidth/>
                <TextField label='Email' hintText='Email' required fullWidth/>
                <TextField label='Cell' hintText='Cell Number' required fullWidth/>
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
                <RaisedButton label="Create Account" primary={true} variant="contained" fullWidth style={{margin: '20px 0'}}/>
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