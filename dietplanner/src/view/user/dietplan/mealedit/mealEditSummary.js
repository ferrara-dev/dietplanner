import Box from "@material-ui/core/Box";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import cx from "clsx";
import React from "react";
import useStyles from "../../../style/mui/mealEditStyle";
import {Link} from "react-router-dom";
import {useRouteMatch} from "react-router";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EditIcon from "@material-ui/icons/Edit";
import {averageMealPlanNutrients, mealNutrientCalculator} from "../../../../helpers/calculation/MealNutrientCalculator";
import SimpleMediaQuery from "../../../style/mui/mediaQuery/mealEditMediaQueries";
export default function MealEditSummary({
                                            mealPlan,
                                            ingredients,
                                            goBack,
                                            edit,
                                            mealTitle,
                                            setMealTitle,
                                            submitMeal,
                                        }) {
    const styles = useStyles();
    const {url} = useRouteMatch();
    const mealNutrients = mealNutrientCalculator(ingredients);
    const mealPlanNutrients = averageMealPlanNutrients(mealPlan);

    return <Box className={styles.root} py={3} px={3.5}>
        <Typography className={styles.heading2} variant={'h1'}>
            {mealTitle && mealTitle + " summary"}
        </Typography>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Grid container spacing={2}>
            <SimpleMediaQuery
            query={'(min-width:1050px)'}>
                <Divider className={styles.divider}/>
                <Typography className={styles.label}></Typography>
                <Grid xs={12} item>
                    <Button
                        component={Link} to={`${url}/${mealTitle || "noName"}/search`}
                        startIcon={<FastfoodIcon/>}
                        classes={{
                            root: cx(styles.button, styles.buttonActive),
                            label: styles.creditCardLabel,
                        }}
                    >
                        Add new ingredient
                    </Button>
                </Grid>
            </SimpleMediaQuery>
        </Grid>
        <Divider className={styles.divider}/>
        <TextField
            className={styles.textField}
            fullWidth
            InputProps={{
                classes: {root: styles.inputBase, input: styles.input},
            }}
            label={'meal title'}
            defaultValue={mealTitle}
            onChange={(e) => setMealTitle(e.target.value)}
        />

        <Grid container spacing={2}>
            <SimpleMediaQuery>

              <Grid xs={6} md={12} lg={12} item>
                  <Typography className={styles.label}>meal details</Typography>
                  {

                      <Grid container spacing={1}>
                          {Object.entries(mealNutrients).map(([key, val], index) => {
                              return <Grid key={index} item xs={12}>
                                  <Typography variant="body1">
                                      {key + " : " + val.toFixed(1)}
                                  </Typography>
                              </Grid>
                          })}
                      </Grid>
                      /*  <Chart
                        classes={{
                            root: styles.chartRoot,
                        }}
                        height={150}
                        data={[
                            {nutrient: "meal plan", val: (mealPlanNutrients.kcal).toFixed(1)},
                            {nutrient: "current meal", val: (mealNutrients.kcal).toFixed(1)},
                        ]}
                    >
                        <PieSeries
                            valueField="val"
                            argumentField="nutrient"
                            innerRadius={0.6}
                        />
                        <Legend
                            root={<div></div>}
                        >
                        </Legend>
                        <Title
                            classes={{root: styles.textField}}
                            text="percentage of total meal plan calories"
                        />
                        <Tooltip>
                        </Tooltip>
                        <Animation/>
                    </Chart>*/}

                </Grid>
            </SimpleMediaQuery>
        </Grid>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Grid container spacing={2}>
            <Grid xs={6} item>
                <Button
                    className={styles.checkoutBtn}
                    color={'primary'}
                    variant={'contained'}
                    onClick={() => submitMeal()}
                    classes={{
                        root: cx(styles.button, styles.buttonActive),
                        label: styles.creditCardLabel,
                    }}
                >
                    Submit meal
                </Button>
            </Grid>
            <Grid xs={6} item>
                <Button
                    className={styles.checkoutBtn}
                    color={'primary'}
                    variant={'contained'}
                    onClick={() => goBack()}
                    classes={{
                        root: cx(styles.button, styles.buttonActive),
                        label: styles.creditCardLabel,
                    }}
                >
                    Go back
                </Button>
            </Grid>
        </Grid>
    </Box>
}