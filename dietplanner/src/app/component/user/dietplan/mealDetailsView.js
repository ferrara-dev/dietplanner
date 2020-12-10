import {Grid, Typography, Table, GridList, GridListTile,ListSubheader,GridListTileBar} from "@material-ui/core";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

export default function MealDetailsView({title, ingredients}) {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <AppBar position="static" className={classes.mealDetailsBar}>
                    <Toolbar>
                        <Typography className={classes.mealDetailsTitle} component="h2" variant="h4" gutterBottom>
                            <div>{title}</div>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid item xs={6}>
                <div className={classes.nutrientDetailsContainer}>
                    <GridList cellHeight={180} className={classes.gridList}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                            <ListSubheader component="div">Ingredients</ListSubheader>
                        </GridListTile>
                        {ingredients.map((ingredient,index) => (
                            <GridListTile key={index}>
                                <img src={ingredient.image || "https://via.placeholder.com/728x90.png?text=No+Picture"} />
                                <GridListTileBar
                                    title={ingredient.label}
                                    subtitle={<span>by: </span>}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles((theme) => ({
    mealDetailsTitle: {
        flexGrow: 1,
        textAlign: 'center',
    },
    mealDetailsBar: {
        background: '#2E3255',
    },
    nutrientDetailsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));