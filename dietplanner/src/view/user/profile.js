import useProfileStyle from "../style/mui/UserProfileSyle";
import {Container, Grid,Paper, TableContainer, Table, TableHead, TableRow, TableCell,TableBody} from "@material-ui/core";
import clsx from "clsx";
import {calculateBMI, calculateBMR} from "../../helpers/calculation/TdeeCalculator";
import {averageMealPlanNutrients} from "../../helpers/calculation/MealNutrientCalculator";

export default function UserProfileView({userProfile, mealPlan}){
    const classes = useProfileStyle();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const mealPlanNutrients = averageMealPlanNutrients(mealPlan);
    return  (
        <div className={classes.root}>
            <h2> User profile </h2>
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Stats */}
                        <Grid item xs={12} md={6} lg={6}>
                            <Paper className={fixedHeightPaper}>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
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
                                                    {userProfile.age}
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
                            </Paper>
                        </Grid>
                        {/* Nutrition */}
                        <Grid item xs={12} md={6} lg={6}>
                            <Paper className={fixedHeightPaper}>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
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
                                                    {(calculateBMR(userProfile)*userProfile.activityLevel.factor).toFixed(0) + " (Kcal)"}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">
                                                    Kcal netto
                                                </TableCell>
                                                <TableCell align="right">
                                                    {mealPlanNutrients.kcal.toFixed(0) - (calculateBMR(userProfile)*userProfile.activityLevel.factor).toFixed(0)}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell align="left">
                                                    Protein / Carb / Fat ratio
                                                </TableCell>
                                                <TableCell align="right">
                                                    {calculateBMI(userProfile).toFixed(2)}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                    </Grid>

                </Container>
            </main>
       </div>
    );
}