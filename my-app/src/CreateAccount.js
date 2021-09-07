// All necessary imports;
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Grid, Paper, Select, Button, FormControl, InputLabel} from "@material-ui/core";
import './App.css';

class CreateAccount extends Component {
// Fields necessary for creating account
constructor(props){
  super(props);
  this.state={
  username:'',
  password:'',
  first_name:'',
  last_name:'',
  email:'',
  cell:'',
  type: ''
  }
 }

render() {
    return (
        <MuiThemeProvider>
        <Grid>
            <Paper elevation={5} style={{padding: 50, height: '60vh', width:280, margin: "100px auto"}}>
                <h1>Create Account</h1>
                <TextField label='Username' hintText='Enter Username' required fullWidth/>
                <TextField label='Password' hintText='Enter Password' required fullWidth/>
                <TextField label='Password' hintText='Confirm Password' required fullWidth/>
                <TextField label='Full Name' hintText='Full Name' required fullWidth/>
                <TextField label='Email' hintText='Email' required fullWidth/>
                <TextField label='Cell' hintText='Cell' required fullWidth/>
                <FormControl>
                <InputLabel>Type</InputLabel>
                <Select
                    native
                    required
                    displayEmpty
                    value={this.state.name}
                    fullWidth
                    onChange={this.handleChange}
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
                <RaisedButton label="Create Account" primary={true} variant="contained" fullWidth style={{margin: '15px 0'}}/>
                <Button 
                disableFocusRipple disableRipple style={{ textTransform: "none" }} 
                variant="text"
                color="primary">Back to Login</Button>
            </Paper>
        </Grid>
        </MuiThemeProvider>
    );
  }
}
export default CreateAccount;