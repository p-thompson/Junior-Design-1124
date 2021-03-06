import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import VillageNavBar from './VillageNavBar';
import { useHistory } from "react-router-dom";
import './dashboard.css';
import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import UserCard from './UserCard'
import UserCard2 from './UserCard2'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import useForceUpdate from 'use-force-update';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background: 'white',
        height:'550px'
      },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
      },
      appBar: {
        background: "#0077c0",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    title: {
        flexgrow: 1
    },
    container: {
        paddingTop: '80px'
    },
      grid: {
        padding: theme.spacing(1),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },
      logout: {
        marginLeft: "auto",
        marginRight: -12
      },
}));

function Dashboard() {
  useForceUpdate();
  const handleDelete = async (id) => {
    await fetch('http://localhost:3000/dashboard/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }  
  const [notes, setNotes] = useState([]);

  const classes = useStyles();
  const history = useHistory();
  const goToLogin = () => history.push('/');

    return (
        <div className={classes.root} style = {{overflowY: 'scroll'}}>
            <AppBar position="absolute" color='primary' className={classes.appBar}>
                <Toolbar clasName={classes.toolbar}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}className={classes.title}>It Takes a Village</Typography>
                    <section className={classes.logout}>
                        <Button 
                            color='inherit'
                            onClick={goToLogin}
                        >
                            logout
                        </Button>
                    </section>
                </Toolbar>
            </AppBar>
                <Grid container className={classes.container}>
                    <Grid item xs={6} className={classes.grid}>
                        <Paper className={classes.paper} style= {{width: 375, marginLeft: 98, textAlign: 'center', backgroundColor: '#E1EBEE'}}>
                            <Typography style={{ fontWeight: 600 }}>REQUESTS</Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={6} className={classes.grid}>
                        <Paper className={classes.paper} style= {{width: 375, marginLeft:98, textAlign: 'center', backgroundColor: '#E1EBEE'}}>
                            <Typography style={{ fontWeight: 600 }}>CONNECTIONS</Typography>
                        </Paper>
                    </Grid>

                    <Paper elevation={5} style={{marginLeft: 80, padding: 6, width:460, backgroundColor: '#E1EBEE', maxHeight: 275, minHeight: 275, overflow: 'auto'}}>
                      <GridList cols ={1} style={{justifyContent: 'center'}}>
                        {history.location.state.get("requests").map(note => (
                          <GridListTile key={note.id} style={{padding: 8, width: 400, height: 'auto'}}>
                            <UserCard note={note} handleDelete={handleDelete} />
                          </GridListTile>
                        ))}
                      </GridList>
                    </Paper>

                    <Paper elevation={5} style={{marginLeft: 380, padding: 6, width:450, backgroundColor: '#E1EBEE', maxHeight: 275, minHeight: 275, overflow: 'auto'}}>
                      <GridList cols ={1} style={{justifyContent: 'center'}}>
                        {history.location.state.get("connections").map(note => (
                          <GridListTile key={note.id} style={{padding: 8, width: 400, height: 'auto'}}>
                            <UserCard2 note={note} handleDelete={handleDelete} />
                          </GridListTile>
                        ))}
                      </GridList>
                    </Paper>
                    <Grid item>
                    <VillageNavBar page="home"/>
                    </Grid>
                </Grid>
        </div>
    
    );
}
export default Dashboard;
