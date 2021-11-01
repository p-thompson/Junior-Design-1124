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
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import NoteCard from './UserCard'


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

  const handleDelete = async (id) => {
    await fetch('http://localhost:3000/dashboard/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }  
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/dashboard')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const classes = useStyles();
  const history = useHistory();
  const goToLogin = () => history.push('/');
  const fname = history.location.state.get("fname");


    return (
        <div className={classes.root}>
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
                    <Grid item xs={8} className={classes.grid}>
                        <Paper className={classes.paper}>
                            <Typography>Hello {fname}! These users want to connect with you.</Typography>
                        </Paper>
                    </Grid>

                    <Container>
                      <Grid container spacing={3}>
                        {notes.map(note => (
                          <Grid item xs={12} md={6} lg={4} key={note.id}>
                            <NoteCard note={note} handleDelete={handleDelete} />
                          </Grid>
                        ))}
                      </Grid>
                    </Container>

                    <Grid item xs={8} className={classes.grid}>
                        <Paper className={classes.paper}>
                            <Typography>Users you've connected with.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                    <VillageNavBar page="home"/>
                    </Grid>
                </Grid>
        </div>
    
    );
}
export default Dashboard;