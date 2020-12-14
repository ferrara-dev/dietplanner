import {IconButton, List, ListItem, ListItemText, Toolbar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {makeStyles} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import {Link} from "react-router-dom"
import Button from "@material-ui/core/Button";
import {options, randomID} from "../../helpers/random";

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

    return <List className={classes.toolbar}>

        {nav.map((navigation, index) => {
            return <ListItem key={randomID(12, options.alphanumeric)}>
                <Button key={index} component={Link} to={navigation.link} edge="start" color="inherit"
                        aria-label="menu">
                    {navigation.label}
                </Button>
            </ListItem>
        })
        }
    </List>
}