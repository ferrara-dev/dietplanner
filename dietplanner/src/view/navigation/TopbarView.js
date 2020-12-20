import React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from '@material-ui/core/Toolbar';
import {useNavbarStyle} from "../style/mui/navbarStyle";
import {Link} from "react-router-dom";
import {SidebarTrigger} from "../common/layout/mainAppLayout";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { NavItem, NavMenu } from '@mui-treasury/components/menu/navigation';

export default function TopbarView({onLogout, isAuthenticated}) {
    const classes = useNavbarStyle();

    return (
        <Toolbar className={classes.root}>
            {isAuthenticated && <SidebarTrigger sidebarId="main-app-sidebar"/>}
            <Typography edge={"start"} className={classes.heading} variant={'h1'}>
                {"Diet planner"}
            </Typography>
            {!isAuthenticated && <Button
                component={Link}
                className={classes.buttonLink}
                to="/login"
                color="inherit"
                variant={"text"}
            >
                Login
            </Button>}
            {!isAuthenticated && <Button
                component={Link}
                className={classes.buttonLink}
                to="/signup"
                color="inherit"
                variant={"text"}
            >
                Signup
            </Button>}
            {isAuthenticated && <Button
                component={Link}
                className={classes.buttonLink}
                to="/profile/personal"
                color="inherit"
                variant="text"
                startIcon={<PersonIcon />}
            >
                Profile
            </Button>}
            {isAuthenticated && <Button
                component={Link}
                className={classes.buttonLink}
                to="/diet/meal-plan"
                color="inherit"
                variant={"text"}
                startIcon={<FavoriteIcon />}
            >
                Diet
            </Button>}
            {isAuthenticated && <Button
                className={classes.buttonLink}
                color="inherit"
                onClick={(event) => onLogout(event)}
                startIcon={<ExitToAppIcon />}
            >
                Logout
            </Button>}
        </Toolbar>
    );
};

