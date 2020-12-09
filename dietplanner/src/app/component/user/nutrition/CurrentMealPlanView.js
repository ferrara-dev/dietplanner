import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import {Link, useRouteMatch} from "react-router-dom";
import {
    AccordionSummary,
    Accordion,
    AccordionDetails,
    IconButton,
    TableContainer,
    Table,
    TableHead, TableRow, TableCell, TableBody, Grid
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import {Add} from "@material-ui/icons"
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandableTableRow from "../../common/table/expandableTable";
import EditIcon from '@material-ui/icons/Edit';
import {options, randomID} from "../../../../helpers/random";

export default function CurrentMealPlanView({meals, chooseMeal, addMeal}) {
    const classes = useStyles();
    const {url, path} = useRouteMatch()
    const [edit, setEdit] = React.useState(false);


    return (
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
                        {meals.map(({description, meals, id}, index) => (
                            <ExpandableTableRow
                                key={id}
                                k={id}
                                expandComponent={
                                    meals.map(({title}) => (
                                        <TableCell  key={randomID(12,options.base64)} colSpan="3"><Button>{title}</Button></TableCell>
                                    ))
                                }
                            >

                                <TableCell key={index}>{description}</TableCell>
                                <TableCell key={index + 1}>
                                    {edit && <IconButton key={index - 1} component={Link}
                                                         to={`/home/mealplan/${description}/add`} onClick={() => {
                                        chooseMeal(index);
                                    }}>
                                        <Add fontSize="small"/>
                                    </IconButton>}
                                </TableCell>
                                <TableCell key={index + 2}>
                                    {edit && <IconButton key={index - 2}>
                                        <DeleteIcon fontSize="small"/>
                                    </IconButton>}
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
    )

};


const useStyles = makeStyles((theme) => ({
    tableRow: {
        height: 100,
    },
    list: {
        listStyle: 'none',
        marginBottom: 2,
    },
    title: {
        flex: '1 1 100%',
    }
    ,
    mealsRoot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
}))
