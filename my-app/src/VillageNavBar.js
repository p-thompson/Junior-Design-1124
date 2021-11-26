import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from "react-router-dom";
import Paper from "@mui/material/Paper";

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0
    },
    icons: {
        fontSize: 'large'
    }
  });

export default function VillageNavBar(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.page);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const history = useHistory();
    const goToDashboard = () => history.push('/dashboard', history.location.state);
    const goToSearch = () => history.push('/searchscreen', history.location.state);
    const goToAccountPersonalization = () => history.push('/accountpersonalization', history.location.state);
    
    return(
        <Paper style={{backgroundColor: '#E1EBEE'}}>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} onClick={goToDashboard}/>
        <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} onClick={goToSearch}/>
        <BottomNavigationAction label="Account" value="account" icon={<AccountCircleIcon/>} onClick={goToAccountPersonalization}/>
        </BottomNavigation>
        </Paper>
    );
}
