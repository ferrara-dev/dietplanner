import useStyles from "../../../style/mui/mealEditStyle";
import {useRouteMatch} from "react-router";
import {
    IconButton, Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import ExpandableTableRow from "../../../common/table/expandableTable";
import {options, randomID} from "../../../../helpers/random";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {Add} from "@material-ui/icons";
import AlertDialog from "../../../common/alertDialog";
import DeleteIcon from "@material-ui/icons/Delete";
import {averageMealPlanNutrients} from "../../../../helpers/calculation/MealNutrientCalculator";


export default function MealPlanTableView({mealPlan, chooseCategory, deleteCategory, chooseMeal, addMealToCategory}) {
    const styles = useStyles();
    const borderColor = 'grey.500';
    const {url} = useRouteMatch();
    const [edit, setEdit] = React.useState(false);
    const mealPlanNutrients = averageMealPlanNutrients(mealPlan);

    return <Box pt={{xs: 2, sm: 4, md: 6}}>
        <Typography className={styles.heading} variant={'h1'} gutterBottom>
            Your current mealPlan
        </Typography>
        <TableContainer>
            <Table className={styles.table} aria-label="simple table">
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
        </TableContainer>
    </Box>
};