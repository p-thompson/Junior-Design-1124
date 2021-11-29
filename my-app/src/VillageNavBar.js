import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from "react-router-dom";

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
    const userType = history.location.state.get("user").userType;

    const goToDashboard = () => history.push('/dashboard', history.location.state);
    const goToSearch = () => history.push('/searchscreen', history.location.state);
    function AccountPersonalization () {

        if (userType == 'VOLUNTEER') {
            history.push('/accountpersonalizationvolunteer', history.location.state);
        } else {
            history.push('/accountpersonalization', history.location.state);
        }
    }
    
    return(
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} onClick={goToDashboard}/>
        <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} onClick={goToSearch}/>
        <BottomNavigationAction label="Account" value="account" icon={<AccountCircleIcon/>} onClick={AccountPersonalization}/>
        </BottomNavigation>
    );
}
