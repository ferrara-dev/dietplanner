import useStyles from "../../style/mui/mealBankStyle";
import {
    Container,
    Grid,
    Paper,
    Typography,
    Button
} from "@material-ui/core";

import {Card, CardActionArea, CardActions, CardContent, CardMedia} from '@material-ui/core';
import ProductCard from "./ProductCard";
import React from "react";
import LoadingSpinner from "../../common/loadingSpinner";

export default function IngredientSearchResultView({chooseIngredient, results = [], loading}) {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.resultContainer}>
            {loading && <Grid item xs={12}>
                <LoadingSpinner/>
            </Grid> ||
            results.map((food) => {
                return <Grid key={food.fdcId} item md={6} xs={12}>
                    <ProductCard key={food.fdcId} title={food.description} seeMore={() => {
                        chooseIngredient(food);
                    }}/>
                </Grid>
            })}
        </Grid>
    );
}