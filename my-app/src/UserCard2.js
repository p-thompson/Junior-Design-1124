import React from "react";
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@material-ui/core/CardHeader'
import IconButton from '@material-ui/core/IconButton'
import PageviewIcon from '@material-ui/icons/Pageview';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Avatar } from "@mui/material/";
import anna from './photos/anna_smith.jpeg';
import bob from './photos/bob_wilson.jpeg';
import jane from './photos/jane_doe.jpg';
import joe from './photos/joe_brown.jpg';
import stick from './photos/stickman_prof_pic.png';

export default function UserCard2({ note, handleDelete }) {
    const history = useHistory();
    // need to get the values in order to be able to input them into the cars
    //I struggled with retrieving those from the database, hence the 'paige thompson's
    // const fname = history.location.state.get("fname");
    // const lname = history.location.state.get("lname");
    // const rating = history.location.state.get("rating");
    // const bio = history.location.state.get("bio");
    const goToSpecificView = () => {
      history.location.state.set("selectedUser", note)
      history.push('/profileselection2', history.location.state);
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
      } else {
        return stick;
      }
    }

  return (
    <div>
      <MuiThemeProvider>

        <Card elevation={1} sx = {{width: 'auto'}}>
          <CardHeader
            avatar={<Avatar alt="User Profile Image" src={whichPhoto()} />}
            titleTypographyProps={{variant:'h6' }}
            title={note.firstName + " " + note.lastName} 
            action={
              <RaisedButton label="Contact" align="right" variant="contained" backgroundColor='#0077c0' labelColor="white" style={{marginTop: '10px'}} onClick={goToSpecificView}>
              </RaisedButton>
            }

              // <IconButton onClick={() => handleDelete(note.id)}>
              //   <DeleteOutlined />
              //   onClick={goToSpecificView}>
              //     <PageviewIcon />
              // </IconButton>
            
          // going to need some type of implementaiton of this button but
          // obiosuly not on every single card if they don't have a connection
          //   action={
          //       <Button label="Remove Connection"/>
          //   }
            
          />

        </Card>
      </MuiThemeProvider>
    </div>
  )
}
