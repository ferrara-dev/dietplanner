import {
    Grid,
    Typography,
    Paper,
    Card,
    CardContent,
    GridList,
    GridListTile,
    List,
    IconButton,
    ListItem, ListItemText,
    ListSubheader,
    GridListTileBar,
    Container, Chip, Avatar,
    CssBaseline, Box, Divider, ListItemAvatar, ListItemSecondaryAction
} from "@material-ui/core";
import React from "react";
import {fade, makeStyles} from "@material-ui/core/styles";
import Header from "./header";
import clsx from "clsx";
import {mealNutrientCalculator} from "../../../../helpers/calculation/MealNutrientCalculator";
import InfoIcon from "@material-ui/icons/Info";
import Button from "@material-ui/core/Button";
import {Link, useRouteMatch} from "react-router-dom";

export default function MealDetailsView({title, ingredients, categoryDescription}) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const colors = [classes.card1, classes.card2, classes.card3, classes.card4, classes.card5];
    const {url} = useRouteMatch();
    return (<div className={classes.root}>
            <Header
                title={title}
                buttons={[<Button
                    key={1}
                    size="small"
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to={`/home/mealplan/${categoryDescription}/edit/${title}`}
                >
                    Edit
                </Button>]
                }
            />
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <div className={classes.root} style={{width: 'auto', height: 'auto'}}>
                                    <GridList cellHeight={180} className={classes.gridList} cols={3}>
                                        <GridListTile key="Subheader" cols={3} style={{height: 'auto'}}>
                                            <ListSubheader component="div">December</ListSubheader>
                                        </GridListTile>
                                        {ingredients.map((tile, index) => (
                                            <GridListTile key={index}>
                                                <img
                                                    src={tile.ingredient.image || "https://via.placeholder.com/728x90.png?text=No+Picture"}
                                                    alt={tile.ingredient.label}/>
                                                <GridListTileBar
                                                    title={tile.ingredient.label}
                                                    subtitle={<span>{tile.quantity + "g"}</span>}
                                                    actionIcon={
                                                        <IconButton aria-label={`info about ${tile.ingredient.label}`}
                                                                    className={classes.icon}>
                                                            <InfoIcon/>
                                                        </IconButton>
                                                    }
                                                />
                                            </GridListTile>
                                        ))}
                                    </GridList>
                                </div>
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Grid container spacing={1}>
                                    {Object.entries(mealNutrientCalculator(ingredients)).map(([key, val], index) => {
                                        return <Grid key={index} item xs={4} md={12}>
                                            <Card key={index}
                                                  raised
                                            >
                                                <CardContent className={colors[index]}>
                                                    <div className={classes.root2}>
                                                        <Typography variant="body1">
                                                            {key + " : " + val.toFixed(1)}
                                                        </Typography>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    })}
                                </Grid>
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>

                            </Paper>
                        </Grid>
                    </Grid>

                </Container>
            </main>
        </div>

    )
        ;
};

const useStyles = makeStyles((theme) => ({
    gridListRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },

    gridList: {
        overflow: "auto"
    },

    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    card1: {
        backgroundColor: fade("#22c1b9", 0.5)
    },
    card2: {
        backgroundColor: fade("#2efd69", 0.5)
    },
    card3: {
        backgroundColor: fade("#2efd31", 0.5)
    },
    card4: {
        backgroundColor: fade("#6afd2e", 0.5)
    },
    card5: {
        backgroundColor: fade("#b3fd2e", 0.5)
    }
    ,
    inline: {
        display: "inline"
    },
    nutrientLabel: {
        padding: 5,
    },
    root2: {
        display: 'flex',
    },
    root: {
        overflow : 'hidden'
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
    },
    fixedHeight: {
        height: 360,
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