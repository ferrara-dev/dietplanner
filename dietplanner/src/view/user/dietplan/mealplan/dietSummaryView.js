import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {Container, Grid, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useRouteMatch} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import ExpandableTableRow from "../../../common/table/expandableTable";
import {options, randomID} from "../../../../helpers/random";
import Button from "@material-ui/core/Button";
import {Add} from "@material-ui/icons";
import AlertDialog from "../../../common/alertDialog";
import DeleteIcon from "@material-ui/icons/Delete";
import {averageMealPlanNutrients, pcfRatio} from "../../../../helpers/calculation/MealNutrientCalculator";
import {
    Chart,
    PieSeries,
    Title,
    Legend,
    Tooltip
} from '@devexpress/dx-react-chart-material-ui';

import {Animation,} from '@devexpress/dx-react-chart';
import PageLayout from "../../../common/layout/pageRoot";
import MealPlanSummaryView from "./mealPlanSummaryView";
import MealPlanTableView from "./mealPlanTable";

export default function DietSummaryView({mealPlan, chooseCategory, deleteCategory, chooseMeal, addMealToCategory}) {
    const classes = useStyles();
    const {path, url} = useRouteMatch();
    const [edit, setEdit] = React.useState(false);
    const mealPlanNutrients = averageMealPlanNutrients(mealPlan);

    const pcf = pcfRatio(averageMealPlanNutrients(mealPlan));
    console.log(pcf);

    return <PageLayout>
        <MealPlanSummaryView mealPlan={mealPlan} chooseMeal={chooseMeal} deleteCategory={deleteCategory} addMealToCategory={addMealToCategory} chooseCategory={chooseCategory}/>
        <MealPlanTableView mealPlan={mealPlan} chooseMeal={chooseMeal} deleteCategory={deleteCategory} addMealToCategory={addMealToCategory} chooseCategory={chooseCategory}/>
    </PageLayout>
}

{/*
<Grid container>
        <Grid item xs={12}>
            <AppBar position="static" className={classes.mealPlanBar}>
                <Toolbar></Toolbar>
            </AppBar>
        </Grid>
        <Grid item xs={12} md={6}>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <div className={classes.mealsRoot}>
                        <Typography className={classes.header}>
                            Meal plan
                        </Typography>
                        <Paper component="div">
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <IconButton onClick={() => setEdit(!edit)}>
                                                <EditIcon fontSize="small"/>
                                            </IconButton>
                                        </TableCell>
                                        <TableCell>Meal plan</TableCell>
                                        <TableCell padding="checkbox"/>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {mealPlan.map(({description, meals, id}, index) => (
                                        <ExpandableTableRow
                                            key={id}
                                            k={id}
                                            expandComponent={
                                                meals.map((meal) => (
                                                    <TableCell key={randomID(12, options.base64)}
                                                               colSpan="3">
                                                        <Button component={Link}
                                                                to={`${url}/${meal.title}`}
                                                                onClick={(e) => {
                                                                    chooseCategory(index);
                                                                    chooseMeal(meal)
                                                                }}>{meal.title}
                                                        </Button>
                                                    </TableCell>
                                                ))
                                            }
                                        >
                                            <TableCell key={index}><Button
                                                onClick={() => {
                                                    chooseCategory(index);
                                                }}>{description}</Button></TableCell>
                                            <TableCell key={index + 1}>
                                                {edit && <IconButton key={index - 1} component={Link}
                                                                     to={`/home/mealplan/${description}/edit`}
                                                                     onClick={() => {
                                                                         addMealToCategory(index);
                                                                     }}>
                                                    <Add fontSize="small"/>
                                                </IconButton>}
                                            </TableCell>
                                            <TableCell key={index + 2}>
                                                {edit && <AlertDialog
                                                    onConfirm={() => {
                                                        deleteCategory(index);
                                                        setEdit(!edit);
                                                    }}
                                                    content={"Do you want to delete the " + description + " category?"}
                                                    title={"Delete " + description + "?"}
                                                    OpenIcon={DeleteIcon}
                                                />}
                                            </TableCell>
                                        </ExpandableTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Button component={Link} to="/home/mealPlan/createMealCategory"
                                    fullWidth>
                                Add new meal category
                            </Button>
                        </Paper>
                    </div>
                </Paper>
            </div>
        </Grid>
        <Grid item xs={12} md={6}>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Paper component="div">
                                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                        Average calculated calories
                                    </Typography>
                                    <Typography component="p" variant="h4">
                                        {mealPlanNutrients.kcal.toFixed(0)} kcal
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper component="div">
                                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                        Average calculated protein
                                    </Typography>
                                    <Typography component="p" variant="h4">
                                        {mealPlanNutrients.protein.toFixed(0)} g
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper component="div">
                                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                        Average calculated carbs
                                    </Typography>
                                    <Typography component="p" variant="h4">
                                        {mealPlanNutrients.carbs.toFixed(0)} g
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={6}>
                                <Paper component="div">
                                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                        Average calculated fat
                                    </Typography>
                                    <Typography component="p" variant="h4">
                                        {mealPlanNutrients.fat.toFixed(0)} g
                                    </Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12}>
                                <Paper>
                                    <Chart
                                        data={[
                                            {nutrient: "protein", val: (pcf.proteinRatio * 100).toFixed(1)},
                                            {nutrient: "carbs", val: (pcf.carbRatio * 100).toFixed(1)},
                                            {nutrient: "fat", val: (pcf.fatRatio * 100).toFixed(1)}
                                        ]}
                                        height={350}
                                    >
                                        <PieSeries
                                            valueField="val"
                                            argumentField="nutrient"
                                            innerRadius={0.6}
                                        />
                                        <Legend>
                                        </Legend>
                                        <Title
                                            text="Ratio between protein/carbs/fat"
                                        />
                                        <Tooltip>
                                        </Tooltip>
                                        <Animation/>
                                    </Chart>
                                </Paper>
                            </Grid>
                        </Grid>

                </Paper>
            </div>
        </Grid>
    </Grid>
<Grid item xs={12} md={6}>
<div className={classes.root}>
<Paper className={classes.paper}>
<React.Fragment>
<Typography component="h2" variant="h6" color="primary" gutterBottom>
Average calculated calories
</Typography>
<Typography component="p" variant="h4">
{currentMealCategory.meals.length > 0 && averageMealCategoryNutrients(currentMealCategory).kcal.toFixed(1)} kcal
</Typography>
</React.Fragment>
</Paper>
</div>
</Grid>
*/
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        listStyle: 'none',
        marginBottom: 2,
    },
    mealPlanBar: {
        background: '#2E3B55',
    },
    root2: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    header: {
        borderBottomWidth: 5,
        borderBottomStyle: "inset",
        borderBlockColor: "darkgray"
    },
    title: {
        flex: '1 1 100%',
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        height: "100%",
        justifyContent: 'center'
    },
    fixedHeight: {
        height: 240,
    },
    mealsRoot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    addMealButton: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(2),
    },
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    tooltip: {
        backgroundColor: "transparent",
        color: theme.palette.common.black
    },
    tableRow: {
        height: 100,
    },
}));