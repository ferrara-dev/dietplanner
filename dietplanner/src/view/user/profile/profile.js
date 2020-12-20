import useStyles from "../../style/mui/UserProfileSyle";
import {
    Grid,
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography
} from "@material-ui/core";
import {calculateBMI, calculateBMR} from "../../../helpers/calculation/TdeeCalculator";
import {averageMealPlanNutrients} from "../../../helpers/calculation/MealNutrientCalculator";
import getAge from 'age-by-birthdate';
import Box from "@material-ui/core/Box";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import cx from "clsx";
import {Content, DrawerSidebar, Trigger} from "../../common/layout/styled";
import withContentLayout from "../../../HoC/withContentLayout";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function UserDetailsView({layout, userProfile, mealPlan}) {
    const classes = useStyles();
    const mealPlanNutrients = averageMealPlanNutrients(mealPlan);
    return (<Content>
            <Box className={classes.root} py={3} px={3.5}>
                <Toolbar>
                    <Typography className={classes.heading} variant={'h1'} gutterBottom>
                        personal information
                    </Typography>
                </Toolbar>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={2} align={"center"}>Nutrition</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="left">
                                            average caloric intake
                                        </TableCell>
                                        <TableCell align="right">
                                            {mealPlanNutrients.kcal.toFixed(0) + " (Kcal)"}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                            Approximated TDEE
                                        </TableCell>
                                        <TableCell align="right">
                                            {(calculateBMR({
                                                gender: userProfile.gender,
                                                height: userProfile.height,
                                                weight: userProfile.weight,
                                                age: getAge(userProfile.dob)
                                            }) * userProfile.activityLevel.factor).toFixed(0) + " (Kcal)"}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                            Kcal netto
                                        </TableCell>
                                        <TableCell align="right">
                                            {mealPlanNutrients.kcal.toFixed(0) - (calculateBMR({
                                                gender: userProfile.gender,
                                                height: userProfile.height,
                                                weight: userProfile.weight,
                                                age: getAge(userProfile.dob)
                                            }) * userProfile.activityLevel.factor).toFixed(0)}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell colSpan={2} align={"center"}>Physical</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="left">
                                            Weight
                                        </TableCell>
                                        <TableCell align="right">
                                            {userProfile.weight + " (kg)"}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                            Height
                                        </TableCell>
                                        <TableCell align="right">
                                            {userProfile.height + " (cm)"}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                            Age
                                        </TableCell>
                                        <TableCell align="right">
                                            {getAge(userProfile.dob)}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">
                                            BMI
                                        </TableCell>
                                        <TableCell align="right">
                                            {calculateBMI(userProfile).toFixed(2)}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Box>
        </Content>
    );

}

export default withContentLayout(UserDetailsView);