import useStyles from "../style/mui/UserProfileSyle";
import {
    Container,
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
import clsx from "clsx";
import {calculateBMI, calculateBMR} from "../../helpers/calculation/TdeeCalculator";
import {averageMealPlanNutrients} from "../../helpers/calculation/MealNutrientCalculator";
import getAge from 'age-by-birthdate';
import Box from "@material-ui/core/Box";
import React from "react";

export default function UserProfileView({userProfile, mealPlan}) {
    const classes = useStyles();
    const mealPlanNutrients = averageMealPlanNutrients(mealPlan);
    return (
            <Box pt={{xs: 2, sm: 4, md: 6}}>
                <Typography className={classes.heading} variant={'h1'} gutterBottom>
                    User profile
                </Typography>
                <Grid container spacing={3}>
                    {/* Stats */}
                    <Grid item xs={12}>
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
                    {/* Nutrition */}

                    <Grid item xs={12}>
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
                </Grid>
            </Box>
    );
}