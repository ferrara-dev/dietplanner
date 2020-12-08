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
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    toolbar: {
        background: 'linear-gradient(45deg, var(--background-start) 30%, var(--background-end) 90%)',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
        anchor: 'left'
    },
});

export default function SidebarView({nav, open, toggle}) {
    const classes = useStyles();

    return <div className={classes.toolbar}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={(e) => toggle(e, true)}>
                <MenuIcon/>
            </IconButton>
        </Toolbar>
        <Drawer
            anchor={"left"}
            open={open}
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper
            }}
            onClose={(e) => toggle(e, false)
            }>
            {nav.map((navigation, index) => {
                return <Button key={index} component={Link} to={navigation.link} edge="start" color="inherit" aria-label="menu"
                               onClick={(e) => toggle(e, false)}>
                    {navigation.label}
                </Button>
            })
            }
        </Drawer>
    </div>
}