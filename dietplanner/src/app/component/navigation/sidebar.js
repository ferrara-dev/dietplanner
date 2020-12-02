import {IconButton, List, ListItem, ListItemText, Toolbar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {makeStyles} from "@material-ui/core";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Drawer from "@material-ui/core/Drawer";
import MenuItem from "@material-ui/core/MenuItem";
import {Link} from "react-router-dom"

const useStyles = makeStyles({
    toolbar: {
        background: 'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
        anchor : 'left'
    },
});

export default function SidebarView(){
    const classes = useStyles();

    const [state, setState] = React.useState({
        sideDrawerOpen: false,
    });

    const list = () => (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Divider />
            <List>
                <ListItem>
                    <ListItemIcon onClick={toggleDrawer( false)}> <AccountCircleIcon/> </ListItemIcon>
                    <ListItemText primary={"profile"} />
                </ListItem>
            </List>
        </div>
    );

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, sideDrawerOpen: open });
    };

   return <div className={classes.toolbar}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon/>
            </IconButton>
        </Toolbar>
       <Drawer
           anchor={"left"}
           open={state.sideDrawerOpen}
           className={classes.drawer}
           classes={{
               paper: classes.drawerPaper
           }}
           onClose={toggleDrawer(false)
           }>

           <MenuItem primaryText="Profile">
               <IconButton component={Link} to="/home/profile" edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                   <AccountCircleIcon> Profile </AccountCircleIcon>
               </IconButton>
           </MenuItem>
           <MenuItem>Menu Item 2</MenuItem>
       </Drawer>
    </div>
}