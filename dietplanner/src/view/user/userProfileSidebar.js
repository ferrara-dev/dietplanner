import useStyles from "../style/mui/mealEditStyle";
import {averageMealPlanNutrients, mealNutrientCalculator} from "../../helpers/calculation/MealNutrientCalculator";
import Box from "@material-ui/core/Box";
import {
    Grid,
    Typography
} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import React from "react";
import TextField from "@material-ui/core/TextField";

export default function UserProfileSidebar({userProfile, mealPlan, onChange}) {
    const styles = useStyles();
    const mealPlanNutrients = averageMealPlanNutrients(mealPlan);
    return <Box className={styles.root} py={3} px={3.5}>
        <Typography className={styles.heading2} variant={'h1'}>
            {"This sidebar is under development"}
        </Typography>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Grid container spacing={2}>
        </Grid>
        <Divider className={styles.divider}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Divider className={styles.divider}/>

        <Typography className={styles.heading2} variant={'h1'}>
            This sidebar will contain progress statistics
        </Typography>

        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
        <Box height={24} css={{flex: 'none'}}/>
    </Box>
}
