import Box from "@material-ui/core/Box";
import {Button, Grid, Typography} from "@material-ui/core";
import cx from "clsx";
import React from "react";
import useStyles from "../../../style/mui/mealDetailsSummaryStyle";
import {Link} from "react-router-dom";
import {useRouteMatch} from "react-router";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import {averageMealPlanNutrients, mealNutrientCalculator} from "../../../../helpers/calculation/MealNutrientCalculator";
import {SidebarHeading} from "../../../common/content/sidebar/sidebarChildren";
import Toolbar from "@material-ui/core/Toolbar";
import {DrawerSidebar, Trigger} from "../../../common/layout/styled";
import withContentLayout from "../../../../HoC/withContentLayout";

function MealDetailsSummary({
                                mealPlan,
                                ingredients,
                                mealTitle,
                                submitMeal,
                                goBack,
                                submit,
                                mealId,
                                categoryDescription,
                                currentMealPlan
                            }) {
    const styles = useStyles();
    const {url} = useRouteMatch();
    const mealNutrients = mealNutrientCalculator(ingredients);

    return <React.Fragment>
        <DrawerSidebar
            PaperProps={{className: styles.edgeSidebarBody}}
            sidebarId={'edgeSidebar'}
        >
            <Box className={styles.root} py={3} px={3.5}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Toolbar>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <SidebarHeading styleProps={{color: "#2ac31a", fontFamily: "verdana"}}>
                                        {mealTitle}
                                    </SidebarHeading>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button
                                        component={Link} to={`${url}/search`}
                                        startIcon={<FastfoodIcon/>}
                                        classes={{
                                            root: cx(styles.button, styles.buttonActive),
                                            label: styles.creditCardLabel,
                                        }}
                                    >
                                        Add new ingredient
                                    </Button>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography className={styles.heading2} variant={'h1'}>
                            Meal nutrients
                        </Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Typography className={styles.heading2} variant={'h1'}>
                            Resulting meal plan nutrients
                        </Typography>
                    </Grid>
                    <Grid xs={6} item>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    Protein : {mealNutrients.protein.toFixed(1)}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    Carbs : {mealNutrients.carbs.toFixed(1)}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    Fat : {mealNutrients.fat.toFixed(1)}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    Kcal : {mealNutrients.kcal.toFixed(1)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={6} item>
                    </Grid>
                </Grid>

                <Box height={24} css={{flex: 'none'}}/>
                <Box height={24} css={{flex: 'none'}}/>
                <Box height={24} css={{flex: 'none'}}/>
                <Grid container spacing={2}>
                    <Grid xs={12} item>
                        <Button
                            className={styles.checkoutBtn}
                            color={'primary'}
                            variant={'contained'}
                            onClick={() => submitMeal()}
                            classes={{
                                root: cx(styles.button, styles.buttonActive),
                                label: styles.creditCardLabel,
                            }}
                            disabled={!mealTitle && true}
                        >
                            {"Submit"}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </DrawerSidebar>
    </React.Fragment>
};

export default withContentLayout(MealDetailsSummary);