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

export default function NoteCard({ note, handleDelete }) {
    const history = useHistory();
    // const fname = history.location.state.get("fname");
    // const lname = history.location.state.get("lname");
    // const rating = history.location.state.get("rating");
    // const bio = history.location.state.get("bio");
    const goToSpecificView = () => history.push('/profileselection', history.location.state);

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <Button label="View Profile" icon={<PageviewIcon/>} onClick={goToSpecificView}/>

            // <IconButton onClick={() => handleDelete(note.id)}>
            //   <DeleteOutlined />
            //   onClick={goToSpecificView}>
            //     <PageviewIcon />
            // </IconButton>
          }
        // going to need some type of implementaiton of this button but
        // obiosuly not on every single card if they don't have a connection
        //   action={
        //       <Button label="Remove Connection"/>
        //   }
          title={note.fname + note.lname} 
        />
      </Card>
    </div>
  )
}
// export default function MediaCard() {

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="/static/images/cards/contemplative-reptile.jpg"
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           fname
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

