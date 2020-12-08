import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"

import {
    AppBar,
    Toolbar,
    Grid,
    Paper,
    Container,
    TextField,
    IconButton,
    InputBase,
    Divider,
    Tooltip
} from "@material-ui/core"
import {TableContainer, Table, TableCell, TableBody, TableHead, TableRow} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from "@material-ui/icons/Add"
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import Typography from "@material-ui/core/Typography";

export default function MealEditView({currentMeal}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid item xs={12} md={12} lg={12}>
                <AppBar position="static" className={classes.mealPlanBar}>
                    <Toolbar>
                        <Typography edge="start" component={'span'} variant={'body2'} className={classes.title}>
                            {currentMeal.meal}
                        </Typography>

                        <Button component={Link} to="/home/mealplan">
                            Go back to mealplan
                        </Button>

                        <Button onClick={() => {
                            console.log("adding this alternative to " + currentMeal.meal);
                        }}>
                            Add/edit alternative
                        </Button>
                    </Toolbar>
                </AppBar>

                <div className={classes.root}>
                    <main className={classes.content}>
                        <Container maxWidth="lg" className={classes.container}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={5} lg={4}>
                                        <Paper className={classes.paper}>
                                            <TextField
                                                label={`name of ${currentMeal.meal} alternative`}
                                                id="standard-start-adornment"
                                            />
                                        </Paper>
                                        <Paper>
                                            <Typography className={classes.title} variant="h6" id="tableTitle"
                                                        component="div">
                                                Ingredients
                                            </Typography>
                                            <TableContainer component={Paper}>
                                                <Table aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
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
                                                        </TableRow>
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
                                        </Paper>
                                    </Grid>

                                    <Grid item xs={12} md={7} lg={8}>
                                        <Paper className={classes.paper}>
                                            <SearchBar>

                                            </SearchBar>
                                        </Paper>
                                    </Grid>
                                </Grid>

                        </Container>
                    </main>
                </div>
            </Grid>
        </div>
    )
}

function SearchBar() {
    const useStyles = makeStyles((theme) => ({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }));
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search ingridients"
                inputProps={{'aria-label': 'search google maps'}}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon/>
            </IconButton>
        </Paper>
    );
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