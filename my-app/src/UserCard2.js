import React from "react";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@material-ui/core/CardHeader';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Avatar } from "material-ui";

export default function UserCard2({ note, handleDelete }) {
    const history = useHistory();
    const goToSpecificView = () => history.push('/profileselection2', history.location.state);

  return (
    <div>
      <MuiThemeProvider>

        <Card elevation={1} sx = {{width: 'auto'}}>
          <CardHeader
            avatar={<Avatar alt="User Profile Image" img src="https://pbs.twimg.com/profile_images/1357505418/stickman_prof_pic.png" />}
            titleTypographyProps={{variant:'h6' }}
            title={note.fname + " " + note.lname} 
            action={
              <RaisedButton label="View Profile" align="right" variant="contained" backgroundColor='#0077c0' labelColor="white" style={{marginTop: '10px'}} onClick={goToSpecificView}>
              </RaisedButton>
            }            
          />
        </Card>
      </MuiThemeProvider>
    </div>
  )
}
