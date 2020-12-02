import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from '@material-ui/core/Toolbar';
import {useNavbarStyle} from "../../style/navbarStyle";
import MenuIcon from "@material-ui/icons/Menu";
import {NavLink, Link, useHistory} from "react-router-dom";
import {Container, IconButton, List, ListItemText, ListItem} from "@material-ui/core"

export default function TopbarView({onLogout}) {
    const classes = useNavbarStyle();
    const [state, setState] = React.useState({
        sideDrawerOpen: false,
        authenticated : true
    });

    const history = useHistory();
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography edge="start" component={'span'} variant={'body2'} className={classes.title}>
                        Diet planner
                    </Typography>
                    <Button component={NavLink} to="/login" color="inherit" >Login</Button>
                    <Button component={NavLink} to="/signup" color="inherit" >Signup</Button>
                    <Button color="inherit" onClick={(event) => onLogout(event)}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );

}