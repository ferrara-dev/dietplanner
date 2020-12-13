import useStyles from "../../../style/mui/mealEditStyle";
import {useRouteMatch} from "react-router";
import {Button, Grid, TextField, Typography, Paper, Card, CardContent} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import React from "react";
import {Link} from "react-router-dom";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import cx from "clsx";
import EditIcon from "@material-ui/icons/Edit";
import {
    averageMealPlanNutrients,
    mealNutrientCalculator,
    pcfRatio
} from "../../../../helpers/calculation/MealNutrientCalculator";
import {
    Chart,
    PieSeries,
    Title,
    Legend,
    Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import {Animation,} from '@devexpress/dx-react-chart';


export default function MealPlanSummaryView({mealPlan, chooseCategory, deleteCategory, chooseMeal, addMealToCategory}) {
    const styles = useStyles();
    const {url} = useRouteMatch();
    const mealPlanNutrients = averageMealPlanNutrients(mealPlan);
    const pcf = pcfRatio(averageMealPlanNutrients(mealPlan));

    return (
        <Box className={styles.root} py={3} px={3.5}>
            <Typography className={styles.heading2} variant={'h1'}>
                Meal plan summary
            </Typography>
            <Divider className={styles.divider}/>
            <Typography className={styles.label}></Typography>
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <Button
                        component={Link} to="/home/mealPlan/createMealCategory"
                        startIcon={<FastfoodIcon/>}
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
                    <Chart
                        classes={{
                            root: styles.chartRoot
                        }}
                        height={245}
                        data={[
                            {nutrient: "protein", val: (pcf.proteinRatio * 100).toFixed(1)},
                            {nutrient: "carbs", val: (pcf.carbRatio * 100).toFixed(1)},
                            {nutrient: "fat", val: (pcf.fatRatio * 100).toFixed(1)}
                        ]}
                    >
                        <PieSeries
                            valueField="val"
                            argumentField="nutrient"
                            innerRadius={0.6}
                        />
                        <Legend>
                        </Legend>
                        <Title
                            text="protein/carb/fat ratio"
                        />
                        <Tooltip>
                        </Tooltip>
                        <Animation/>
                    </Chart>
                </Grid>
                <Divider className={styles.divider}/>
                <Grid item xs={12}>
                    <Grid container spacing={1}>
                        {Object.entries(mealPlanNutrients).map(([key, val], index) => {
                            return <Grid key={index} item xs={12}>
                                <Typography variant="body1">
                                                {key + " : " + val.toFixed(1)}
                                </Typography>
                            </Grid>
                        })}
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