import useStyles from "../../../style/mui/mealEditStyle";
import {useRouteMatch} from "react-router";
import {Button, Grid, TextField, Typography, Paper, Card, CardContent} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import React from "react";
import {Link} from "react-router-dom";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import cx from "clsx";
import {
    averageMealPlanNutrients,
    mealNutrientCalculator,
    pcfRatio
} from "../../../../helpers/calculation/MealNutrientCalculator";


export default function MealPlanSummaryView({userData, mealPlan, resetCurrentMealCategory}) {
    const styles = useStyles();
    const {url} = useRouteMatch();
    const mealPlanNutrients = averageMealPlanNutrients(mealPlan);
    const pcf = pcfRatio(averageMealPlanNutrients(mealPlan));
    const kcalNet = 0;

    return (
        <Box className={styles.root} py={3} px={3.5}>
            <Typography className={styles.heading2} variant={'h1'}>
                Meal plan summary
            </Typography>
            <Divider className={styles.divider}/>
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <Button
                        component={Link} to="/home/mealPlan/category/create-new"
                        startIcon={<FastfoodIcon/>}
                        onClick={() => {
                            resetCurrentMealCategory();
                        }}
                        classes={{
                            root: cx(styles.button, styles.buttonActive),
                            label: styles.creditCardLabel,
                        }}
                    >
                        Add new category
                    </Button>
                </Grid>
                <Divider className={styles.divider}/>
                <Grid item xs={12}>
                    <Divider className={styles.divider}/>
                    <Typography variant="body1" className={styles.label}> Average meal plan nutrients </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Protein : {mealPlanNutrients.protein.toFixed(1)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Carbs : {mealPlanNutrients.carbs.toFixed(1)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Fat : {mealPlanNutrients.fat.toFixed(1)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Calories : {mealPlanNutrients.kcal.toFixed(1)}
                            </Typography>
                        </Grid>
                        <Divider className={styles.divider}/>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Calories : {mealPlanNutrients.kcal.toFixed(1)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider className={styles.divider}/>
                    <Typography variant="body1" className={styles.label}> Average meal plan nutrients </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Protein : {mealPlanNutrients.protein.toFixed(1)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Carbs : {mealPlanNutrients.carbs.toFixed(1)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Fat : {mealPlanNutrients.fat.toFixed(1)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Calories : {mealPlanNutrients.kcal.toFixed(1)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Divider className={styles.divider}/>

            <Box height={24} css={{flex: 'none'}}/>
            <Box height={24} css={{flex: 'none'}}/>
            <Box height={24} css={{flex: 'none'}}/>
        </Box>
    );
}