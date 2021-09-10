import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import VillageNavBar from './VillageNavBar';



function SearchScreen() {
  const style = {
    table: {
      minWidth: 200,
      maxWidth: 200,
      marginTop: 100
    },
  }

  return (
    <><Box bgcolor="text.disabled" color="primary.contrastText" p={4} fontSize={30}>
      Search Screen
    </Box>

    <TableContainer class="tableContainer">
        <Table className={style.table} aria-label="simple table" align="center">
          <TableBody align="center">
            <TableRow align="center">
              <TableCell align="center" component="th" scope="row">
                <FormControl style={{ minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-label">Position</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    autoWidth
                  >
                    <MenuItem value={10}>Caregiver</MenuItem>
                    <MenuItem value={20}>Parent</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <Button variant="contained" color="primary" align="center">
                  Date
                </Button>
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" >
                <FormControl style={{ minWidth: 105 }}>
                  <InputLabel id="demo-simple-select-label">Begin Time</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    autoWidth
                  >
                    <MenuItem value={10}>12:00</MenuItem>
                    <MenuItem value={20}>1:00</MenuItem>
                    <MenuItem value={30}>2:00</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="center">
                <FormControl style={{ minWidth: 105 }}>
                  <InputLabel id="demo-simple-select-label">End Time</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    autoWidth
                  >
                    <MenuItem value={10}>1:00</MenuItem>
                    <MenuItem value={20}>2:00</MenuItem>
                    <MenuItem value={30}>3:00</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
            <TableRow style={{ height: 150 }} align="center">
              <TableCell align="center">
                <Button variant="contained" color="secondary" align="center">
                  Enter
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button variant="contained" color="secondary" align="center" style={{ maxWidth: '100px', maxHeight: '50px', minWidth: '30px', minHeight: '30px' }}>
                  Automatic Matches
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <VillageNavBar/>
      </TableContainer></>
  )
}
export default SearchScreen
