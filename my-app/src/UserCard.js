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
import { Avatar } from "material-ui";

export default function UserCard({ note, handleDelete }) {
    const history = useHistory();
    // need to get the values in order to be able to input them into the cars
    //I struggled with retrieving those from the database, hence the 'paige thompson's
    // const fname = history.location.state.get("fname");
    // const lname = history.location.state.get("lname");
    // const rating = history.location.state.get("rating");
    // const bio = history.location.state.get("bio");
    const goToSpecificView = () => history.push('/profileselection', history.location.state);

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
