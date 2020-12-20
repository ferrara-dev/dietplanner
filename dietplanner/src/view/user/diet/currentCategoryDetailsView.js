import {DrawerSidebar} from "../../common/layout/styled";
import withContentLayout from "../../../HoC/withContentLayout";
import withDietPlan from "../../../HoC/withDietPlan";
import withCurrentCategory from "../../../HoC/withCurrentCategory";
import Box from "@material-ui/core/Box";
import {Button, Grid, Typography} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import cx from "clsx";
import React from "react";
import useStyles from "../../style/mui/mealEditStyle";
import {
    averageMealCategoryNutrients,
    averageMealPlanNutrients
} from "../../../helpers/calculation/MealNutrientCalculator";


function CurrentCategoryDetailsView({layout, meals, mealPlan, priority, addMealToCategory, id, description}){
    const styles = useStyles();
    const averageNutrients = averageMealCategoryNutrients({meals});
    const mealPlanNutrients = averageMealPlanNutrients(mealPlan);
    const open = layout.state.sidebar.edgeSidebar.open;

    return <DrawerSidebar
        sidebarId={"edgeSidebar"}
        PaperProps={{className: styles.edgeSidebarBody}}
    >
        <Box className={styles.root} py={3} px={3.5}>
            <Typography className={styles.heading2} variant={'h1'}>
                {description} details
            </Typography>
            <Divider className={styles.divider}/>
            <Grid container spacing={2}>
                {/*<Grid xs={12} item>
                    <Button
                        component={Link}
                        to="meal-plan/create-category"
                        startIcon={<FastfoodIcon/>}
                        onClick={() => {
                            resetCurrentMealCategory();
                        }}
                        classes={{
                            root: cx(styles.button, styles.buttonActive),
                            label: styles.creditCardLabel,
                        }}
                    >
                        Add new ingredient
                    </Button>
                     </Grid>
                    */}

                <Divider className={styles.divider}/>
                <Grid item xs={12}>
                    <Divider className={styles.divider}/>
                    <Typography variant="body1" className={styles.label}> Average nutrients for {description} </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Protein : {averageNutrients.protein.toFixed(1)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Carbs : {averageNutrients.carbs.toFixed(1)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Fat : {averageNutrients.fat.toFixed(1)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2">
                                Calories : {averageNutrients.kcal.toFixed(1)}
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
    </DrawerSidebar>
};

const CurrentCategoryDetailsWithLayout = withContentLayout(CurrentCategoryDetailsView);
const CurrentCategoryDetailsWithDietPlan = withDietPlan(CurrentCategoryDetailsWithLayout);
const CurrentCategoryDetailsWithCurrentCategory = withCurrentCategory(CurrentCategoryDetailsWithDietPlan);
export default CurrentCategoryDetailsWithCurrentCategory;