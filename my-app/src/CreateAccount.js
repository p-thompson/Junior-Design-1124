// All necessary imports;
import React, {useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Select, Button, FormControl, InputLabel} from "@material-ui/core";
import './CreateAccount.css';
import { useHistory} from "react-router-dom";
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

    return (
        <div className="CreateAccount">
        <Helmet>
        <title>ItTakesAVillage</title>
        </Helmet>
        <MuiThemeProvider>
        <Grid>
            <Paper elevation={5} style={{padding: 50, height: '500px', width:300, margin: "100px auto", overflow: "auto"}}>
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
                <RaisedButton label="Create Account" primary={true} variant="contained" fullWidth style={{margin: '20px 0'}} onClick={goToDashboard}/>
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