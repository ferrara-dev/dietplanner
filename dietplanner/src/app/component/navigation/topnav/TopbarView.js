import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from '@material-ui/core/Toolbar';
import {useNavbarStyle} from "../../style/mui/navbarStyle";

import {NavLink} from "react-router-dom";



export default function TopbarView({onLogout, isAuthenticated}) {
    const classes = useNavbarStyle();
    const [state, setState] = React.useState({
        sideDrawerOpen: false,
        authenticated: true
    });

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography edge="start" component={'span'} variant={'body2'} className={classes.title}>
                        Diet planner
                    </Typography>
                    {!isAuthenticated &&  <Button component={NavLink} to="/login" color="inherit">Login</Button>}
                    {!isAuthenticated && <Button component={NavLink} to="/signup" color="inherit">Signup</Button>}
                    {isAuthenticated &&  <Button color="inherit" onClick={(event) => onLogout(event)}>Logout</Button>}
                </Toolbar>
            </AppBar>
        </div>
    );
}

