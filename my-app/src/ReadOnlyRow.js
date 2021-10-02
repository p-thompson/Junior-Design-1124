import React from "react";
import {Grid, Paper, Select, Avatar, Button, FormControl, InputLabel} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TableRow from "@material-ui/core/TableRow";

/*
        
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        */
const useStyles = makeStyles((theme) => ({
    button: {
 
        width: 5,
        right: 34,
    },
    row: {
        paddingRight: 0,
    },
}));
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    const classes = useStyles();
    return (
    <TableRow style={{}}>
      <td>{contact.row}</td>
      <td>{contact.day}</td>
      <td>{contact.start}</td>
      <td className={classes.row}>{contact.end}</td>
      <Button className={classes.button} style={{width: 6}} type="button" onClick={() => handleDeleteClick(contact.id)}>
        x
      </Button>
    </TableRow>
  );
};

export default ReadOnlyRow;