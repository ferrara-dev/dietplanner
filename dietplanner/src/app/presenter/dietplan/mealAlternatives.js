import {Button, Grid, Paper} from "@material-ui/core";
import {Link, useRouteMatch} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import useFirestoreData from "../../../helpers/hooks/useFirebaseState";
import {useSelector} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default function MealAlternatives() {
    const classes = useStyles();
    const {url, path} = useRouteMatch();
    const currentMeal = useSelector(state => state.nutrition.currentMeal);


    return !currentMeal && <div>...</div> || <div className={classes.root}>
        <AppBar position="static" className={classes.mealPlanBar}>
            <Toolbar>  {currentMeal.meal} alternatives  </Toolbar>
        </AppBar>
        <Paper className={classes.paper}>
            <Button component={Link} to={`${path}/mealplanedit`}
                    onClick={(e) => {
                        console.log("adding alternative!")
                    }}>
                add alternative to this meal
            </Button>
            <List>
                {currentMeal.alternatives && currentMeal.alternatives.map((alternative, index) => {
                    return <ListItem
                        key={index}>
                        {JSON.stringify(alternative)}
                    </ListItem>
                })}
            </List>

        </Paper>
    </div>
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        listStyle: 'none',
        marginBottom: 2,
    },
    mealPlanBar: {
        background: '#2E3B55',
    },
    root2: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    header: {
        borderBottomWidth: 5,
        borderBottomStyle: "inset",
        borderBlockColor: "darkgray"
    },
    title: {
        flex: '1 1 100%',
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        height: "100%",
        justifyContent: 'center'
    },
    fixedHeight: {
        height: 240,
    },
    mealsRoot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    addMealButton: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    tooltip: {
        backgroundColor: "transparent",
        color: theme.palette.common.black
    }
}));