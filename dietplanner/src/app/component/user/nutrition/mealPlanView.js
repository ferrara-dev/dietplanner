import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Button, Container, Grid, Paper} from "@material-ui/core";

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import TabPanel from "../../common/TabbedPanel";
import Toolbar from "@material-ui/core/Toolbar";
import FormDialog from "../../common/FormDialog";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CurrentMealPlanView from "./CurrentMealPlanView";
import {Link, useRouteMatch} from "react-router-dom"
const lists = [
    {
        meal: "Breakfast",
        icon: StarBorder,
        alternatives: [
            {
                key: "oatmeal",
                label: "oatmeal",
            },
            {
                key: "Scrambled eggs",
                label: "Scrambled eggs",
            }
        ]
    },
    {
        meal: "Lunch",
        icon: StarBorder,
        alternatives: [
            {
                key: "Pizza",
                label: "Pizza",
            },
            {
                key: "Chicken wrap",
                label: "Chicken wrap",
            }
        ]
    },

];

export default function MealPlanView({mealPlan, addMeal, chooseMeal, currentMeal}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState({});
    const [currentTab, setCurrentTab] = React.useState(0);
    const { url, path } = useRouteMatch();
    const changeTab = (event, newValue) => {
        setCurrentTab(newValue);
    };

    const handleMealChoice = (key) => {
        const openChoices = open;
        openChoices[key] = !openChoices[key];
        setOpen(openChoices);
        debugger;
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.mealPlanBar}>
                <Toolbar></Toolbar>
            </AppBar>

                <div className={classes.root}>
                    <main className={classes.content}>
                        <Container maxWidth="lg" className={classes.container}>
                            <Grid container spacing={1}>
                                {/* Chart */}
                                {/* Recent Deposits */}
                                <Grid item xs={12} md={4} lg={5}>
                                    <Paper className={classes.paper}>
                                        <CurrentMealPlanView
                                            meals={mealPlan}
                                            chooseMeal={chooseMeal}
                                        />
                                        <FormDialog onAdd={addMeal}>
                                        </FormDialog>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} md={8} lg={7}>
                                    <Paper className={classes.paper}>
                                        {currentMeal.meal} alternatives
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
                                        {/*<Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Typography className={classes.title} variant="h6" id="tableTitle"
                                                            component="div">
                                                    Nutrition
                                                </Typography>
                                                <TableContainer component={Paper}>
                                                    <Table className={classes.table} aria-label="simple table">

                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell component="th"
                                                                           scope="row">{"calories"}</TableCell>
                                                                <TableCell align="right">{700}</TableCell>
                                                            </TableRow>

                                                            <TableRow>
                                                                <TableCell component="th"
                                                                           scope="row">{"fat"}</TableCell>
                                                                <TableCell align="right">{700}</TableCell>
                                                            </TableRow>

                                                            <TableRow>
                                                                <TableCell component="th"
                                                                           scope="row">{"carbs"}</TableCell>
                                                                <TableCell align="right">{700}</TableCell>
                                                            </TableRow>

                                                            <TableRow>
                                                                <TableCell component="th"
                                                                           scope="row">{"protein"}</TableCell>
                                                                <TableCell align="right">{700}</TableCell>
                                                            </TableRow>

                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography className={classes.title} variant="h6" id="tableTitle"
                                                            component="div">
                                                    Ingredients
                                                </Typography>
                                                <TableContainer component={Paper}>
                                                    <Table className={classes.table} aria-label="simple table">
                                                        <TableHead>
                                                            <StyledTableRow>
                                                                <TableCell>Product</TableCell>
                                                                <TableCell align="right">Quantity</TableCell>
                                                                <TableCell align="right">
                                                                    <Tooltip className={classes.tooltip} size="small"
                                                                             component="div" title="add new ingredient">
                                                                        <IconButton tooltip="add new ingredient">
                                                                            <AddIcon/>
                                                                        </IconButton>
                                                                    </Tooltip>
                                                                </TableCell>
                                                            </StyledTableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell component="th"
                                                                           scope="row">{"steel cut oats"}</TableCell>
                                                                <TableCell align="right">{200}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Grid>
                                        </Grid> */}

                                    </Paper>
                                </Grid>

                                {/* Recent Orders */}
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        Nutritional values etc about your current mealplan goes here...
                                    </Paper>
                                </Grid>
                            </Grid>

                        </Container>
                    </main>
                </div>
        </div>
    );
}

class NestedList extends React.Component {
    state = {open: {}};

    handleClick = key => () => {
        console.log(key);
        this.setState({[key]: !this.state[key]});
    };

    render() {
        const {lists, classes} = this.props;

        return (
            <div className={classes.mealsRoot}>
                <List
                    component="nav"
                    subheader={
                        <ListSubheader>Meal plan</ListSubheader>
                    }
                >
                    {/**/}
                    {lists.map(({meal, alternatives}) => {
                        const open = this.state[meal] || false;
                        return (
                            <div key={meal}>
                                <ListItem onClick={this.handleClick(meal)}>
                                    <ListItemText primary={meal}/>
                                    {open ? <ExpandLess/> : <ExpandMore/>}
                                    <ListItemIcon>
                                        <ArrowDropDownIcon/>
                                    </ListItemIcon>
                                </ListItem>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List disablePadding>
                                        {alternatives.map(({key: childKey, label: childLabel}) => (
                                            <ListItem key={childKey} button className={classes.nested}>
                                                <ListItemText primary={childLabel}/>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            </div>
                        );
                    })}
                </List>
            </div>
        );
    }
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
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