import React from "react";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@material-ui/core/CardHeader'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Avatar } from "material-ui";
import anna from './photos/anna_smith.jpeg';
import bob from './photos/bob_wilson.jpeg';
import jane from './photos/jane_doe.jpg';
import joe from './photos/joe_brown.jpg';
import sally from './photos/sally_jones.jpg';
import mike from './photos/mike_johnson.jpg';
import stick from './photos/stickman_prof_pic.png';

export default function UserCard({ note, handleDelete }) {
    const history = useHistory();
    const goToSpecificView = () => {
      history.location.state.set("selectedUser", note)
      history.push('/profileselection', history.location.state);
    }
    const whichPhoto = () => {
      if (note.id == 1) {
        return jane;
      } else if (note.id == 2) {
        return joe;
      } else if (note.id == 3) {
        return anna;
      } else if (note.id == 4) {
        return bob;
      } else if (note.id == 5) {
         return sally
      } else if (note.id == 6) {
        return mike
      } else {
        return stick;
      }
    }
  return (
    <div>
      <MuiThemeProvider>

        <Card elevation={1} sx = {{width: 'auto'}}>
          <CardHeader
            avatar={<Avatar alt="User Profile Image" img src={whichPhoto()} />}
            titleTypographyProps={{variant:'h6' }}
            title={note.firstName + " " + note.lastName} 
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
